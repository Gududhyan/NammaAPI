export type CodeSamples = {
  curl: string;
  csharp: string;
  javascript: string;
  python: string;
};

export type RequestField = {
  name: string;
  type: string;
  required: boolean;
  description: string;
};

export type ErrorCode = {
  code: string;
  meaning: string;
};

export type ApiEndpointDoc = {
  id: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  title: string;
  description: string;
  requestFields?: RequestField[];
  requestExample?: string;
  responseExample: string;
  errorCodes: ErrorCode[];
  codeSamples: CodeSamples;
};

export const apiEndpoints: ApiEndpointDoc[] = [
  {
    id: "create-payout",
    method: "POST",
    path: "/api/v1/payouts",
    title: "Create a Payout",
    description:
      "Initiates a payout to a previously added beneficiary. Returns immediately with a transaction ID; final status arrives via webhook or the transaction status endpoint.",
    requestFields: [
      { name: "amount", type: "integer", required: true, description: "Amount in paise (INR)" },
      { name: "beneficiaryId", type: "string", required: true, description: "ID of a verified beneficiary" },
      { name: "reference", type: "string", required: true, description: "Your unique reference for this payout" },
      { name: "purpose", type: "string", required: false, description: "Purpose code, e.g. vendor_payment, salary, refund" },
    ],
    requestExample: `{
  "amount": 50000,
  "beneficiaryId": "demo-beneficiary",
  "reference": "demo-reference",
  "purpose": "vendor_payment"
}`,
    responseExample: `{
  "transactionId": "demo-transaction-id",
  "status": "PROCESSING",
  "amount": 50000,
  "beneficiaryId": "demo-beneficiary",
  "reference": "demo-reference",
  "createdAt": "2026-01-01T10:00:00Z"
}`,
    errorCodes: [
      { code: "400 invalid_request", meaning: "One or more request fields failed validation" },
      { code: "401 unauthorized", meaning: "Missing or invalid API key" },
      { code: "404 beneficiary_not_found", meaning: "The beneficiaryId does not exist or is not verified" },
      { code: "409 duplicate_reference", meaning: "A payout with this reference already exists" },
      { code: "429 rate_limited", meaning: "Too many requests — retry with backoff" },
    ],
    codeSamples: {
      curl: `curl -X POST https://api.example.com/api/v1/payouts \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 50000,
    "beneficiaryId": "demo-beneficiary",
    "reference": "demo-reference",
    "purpose": "vendor_payment"
  }'`,
      csharp: `var client = new HttpClient
{
    BaseAddress = new Uri("https://api.example.com")
};
client.DefaultRequestHeaders.Authorization =
    new AuthenticationHeaderValue("Bearer", "YOUR_API_KEY");

var payload = new
{
    amount = 50000,
    beneficiaryId = "demo-beneficiary",
    reference = "demo-reference",
    purpose = "vendor_payment"
};

var response = await client.PostAsJsonAsync("/api/v1/payouts", payload);
response.EnsureSuccessStatusCode();

var result = await response.Content.ReadFromJsonAsync<PayoutResponse>();
Console.WriteLine($"Status: {result?.Status}");`,
      javascript: `const response = await fetch("https://api.example.com/api/v1/payouts", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    amount: 50000,
    beneficiaryId: "demo-beneficiary",
    reference: "demo-reference",
    purpose: "vendor_payment",
  }),
});

const data = await response.json();
console.log(data.status);`,
      python: `import requests

response = requests.post(
    "https://api.example.com/api/v1/payouts",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    json={
        "amount": 50000,
        "beneficiaryId": "demo-beneficiary",
        "reference": "demo-reference",
        "purpose": "vendor_payment",
    },
)

data = response.json()
print(data["status"])`,
    },
  },
  {
    id: "create-payment",
    method: "POST",
    path: "/api/v1/payments",
    title: "Create a Payment Collection Order",
    description:
      "Creates a payment collection order that your customer can pay through a hosted checkout link or your own integrated flow.",
    requestFields: [
      { name: "amount", type: "integer", required: true, description: "Amount in paise (INR)" },
      { name: "reference", type: "string", required: true, description: "Your unique reference for this order" },
      { name: "customerEmail", type: "string", required: false, description: "Customer email for the receipt" },
      { name: "methods", type: "string[]", required: false, description: "Allowed payment methods, e.g. upi, card, netbanking" },
    ],
    requestExample: `{
  "amount": 250000,
  "reference": "demo-order-reference",
  "customerEmail": "demo@example.com",
  "methods": ["upi", "card", "netbanking"]
}`,
    responseExample: `{
  "orderId": "demo-order-id",
  "status": "PENDING",
  "amount": 250000,
  "checkoutUrl": "https://pay.example.com/checkout/demo-order-id",
  "reference": "demo-order-reference"
}`,
    errorCodes: [
      { code: "400 invalid_request", meaning: "One or more request fields failed validation" },
      { code: "401 unauthorized", meaning: "Missing or invalid API key" },
      { code: "409 duplicate_reference", meaning: "An order with this reference already exists" },
      { code: "429 rate_limited", meaning: "Too many requests — retry with backoff" },
    ],
    codeSamples: {
      curl: `curl -X POST https://api.example.com/api/v1/payments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 250000,
    "reference": "demo-order-reference",
    "customerEmail": "demo@example.com",
    "methods": ["upi", "card", "netbanking"]
  }'`,
      csharp: `var payload = new
{
    amount = 250000,
    reference = "demo-order-reference",
    customerEmail = "demo@example.com",
    methods = new[] { "upi", "card", "netbanking" }
};

var response = await client.PostAsJsonAsync("/api/v1/payments", payload);
var order = await response.Content.ReadFromJsonAsync<PaymentOrderResponse>();
Console.WriteLine($"Checkout URL: {order?.CheckoutUrl}");`,
      javascript: `const response = await fetch("https://api.example.com/api/v1/payments", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    amount: 250000,
    reference: "demo-order-reference",
    customerEmail: "demo@example.com",
    methods: ["upi", "card", "netbanking"],
  }),
});

const order = await response.json();
console.log(order.checkoutUrl);`,
      python: `import requests

response = requests.post(
    "https://api.example.com/api/v1/payments",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    json={
        "amount": 250000,
        "reference": "demo-order-reference",
        "customerEmail": "demo@example.com",
        "methods": ["upi", "card", "netbanking"],
    },
)

order = response.json()
print(order["checkoutUrl"])`,
    },
  },
  {
    id: "add-beneficiary",
    method: "POST",
    path: "/api/v1/beneficiaries",
    title: "Add a Beneficiary",
    description:
      "Registers a beneficiary (employee, vendor or partner) so payouts can be initiated against them. Beneficiaries go through verification before they can receive funds.",
    requestFields: [
      { name: "name", type: "string", required: true, description: "Beneficiary's registered name" },
      { name: "accountNumber", type: "string", required: true, description: "Bank account number" },
      { name: "ifsc", type: "string", required: true, description: "Bank branch IFSC code" },
      { name: "reference", type: "string", required: false, description: "Your internal reference for this beneficiary" },
    ],
    requestExample: `{
  "name": "Demo Vendor Pvt Ltd",
  "accountNumber": "000000000000",
  "ifsc": "DEMO0000000",
  "reference": "demo-vendor-001"
}`,
    responseExample: `{
  "beneficiaryId": "demo-beneficiary",
  "status": "VERIFICATION_PENDING",
  "name": "Demo Vendor Pvt Ltd",
  "createdAt": "2026-01-01T10:00:00Z"
}`,
    errorCodes: [
      { code: "400 invalid_request", meaning: "Account number or IFSC failed format validation" },
      { code: "401 unauthorized", meaning: "Missing or invalid API key" },
      { code: "422 verification_failed", meaning: "Beneficiary details could not be verified" },
    ],
    codeSamples: {
      curl: `curl -X POST https://api.example.com/api/v1/beneficiaries \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Demo Vendor Pvt Ltd",
    "accountNumber": "000000000000",
    "ifsc": "DEMO0000000",
    "reference": "demo-vendor-001"
  }'`,
      csharp: `var payload = new
{
    name = "Demo Vendor Pvt Ltd",
    accountNumber = "000000000000",
    ifsc = "DEMO0000000",
    reference = "demo-vendor-001"
};

var response = await client.PostAsJsonAsync("/api/v1/beneficiaries", payload);
var beneficiary = await response.Content.ReadFromJsonAsync<BeneficiaryResponse>();
Console.WriteLine($"Beneficiary status: {beneficiary?.Status}");`,
      javascript: `const response = await fetch("https://api.example.com/api/v1/beneficiaries", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Demo Vendor Pvt Ltd",
    accountNumber: "000000000000",
    ifsc: "DEMO0000000",
    reference: "demo-vendor-001",
  }),
});

const beneficiary = await response.json();
console.log(beneficiary.status);`,
      python: `import requests

response = requests.post(
    "https://api.example.com/api/v1/beneficiaries",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    json={
        "name": "Demo Vendor Pvt Ltd",
        "accountNumber": "000000000000",
        "ifsc": "DEMO0000000",
        "reference": "demo-vendor-001",
    },
)

beneficiary = response.json()
print(beneficiary["status"])`,
    },
  },
  {
    id: "transaction-status",
    method: "GET",
    path: "/api/v1/transactions/{transactionId}",
    title: "Get Transaction Status",
    description:
      "Retrieves the current status and details of a payout or payment transaction. Use this to poll for status if you are not consuming webhooks.",
    responseExample: `{
  "transactionId": "demo-transaction-id",
  "type": "PAYOUT",
  "status": "SUCCESS",
  "amount": 50000,
  "reference": "demo-reference",
  "beneficiaryId": "demo-beneficiary",
  "paymentMethod": "IMPS",
  "failureReason": null,
  "createdAt": "2026-01-01T10:00:00Z",
  "updatedAt": "2026-01-01T10:00:42Z"
}`,
    errorCodes: [
      { code: "401 unauthorized", meaning: "Missing or invalid API key" },
      { code: "404 transaction_not_found", meaning: "No transaction exists with the given ID" },
    ],
    codeSamples: {
      curl: `curl https://api.example.com/api/v1/transactions/demo-transaction-id \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
      csharp: `var response = await client.GetAsync("/api/v1/transactions/demo-transaction-id");
var transaction = await response.Content.ReadFromJsonAsync<TransactionResponse>();
Console.WriteLine($"Status: {transaction?.Status}");`,
      javascript: `const response = await fetch(
  "https://api.example.com/api/v1/transactions/demo-transaction-id",
  { headers: { "Authorization": "Bearer YOUR_API_KEY" } }
);

const transaction = await response.json();
console.log(transaction.status);`,
      python: `import requests

response = requests.get(
    "https://api.example.com/api/v1/transactions/demo-transaction-id",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
)

transaction = response.json()
print(transaction["status"])`,
    },
  },
  {
    id: "webhooks",
    method: "POST",
    path: "Your webhook URL",
    title: "Webhook Event: Transaction Status Updated",
    description:
      "When a payout or payment transaction changes status, a signed event is sent to the webhook URL configured in your dashboard. Verify the signature before trusting the payload.",
    responseExample: `{
  "event": "transaction.status.updated",
  "transactionId": "demo-transaction-id",
  "status": "SUCCESS",
  "amount": 50000,
  "reference": "demo-reference",
  "timestamp": "2026-01-01T10:00:42Z"
}`,
    errorCodes: [
      { code: "signature_mismatch", meaning: "Computed signature did not match the X-Signature header — reject the event" },
      { code: "retry_exhausted", meaning: "Your endpoint did not return 2xx after repeated retries" },
    ],
    codeSamples: {
      curl: `# Example signature verification (conceptual)
echo -n "$PAYLOAD" | openssl dgst -sha256 -hmac "$WEBHOOK_SECRET"`,
      csharp: `[HttpPost("webhooks/payments")]
public IActionResult HandleWebhook([FromBody] JsonElement payload, [FromHeader(Name = "X-Signature")] string signature)
{
    var expected = ComputeHmacSha256(payload.GetRawText(), webhookSecret);
    if (!CryptographicOperations.FixedTimeEquals(
            Encoding.UTF8.GetBytes(signature), Encoding.UTF8.GetBytes(expected)))
    {
        return Unauthorized();
    }

    // Process the demo event
    return Ok();
}`,
      javascript: `import crypto from "crypto";

app.post("/webhooks/payments", (req, res) => {
  const expected = crypto
    .createHmac("sha256", process.env.WEBHOOK_SECRET)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (expected !== req.headers["x-signature"]) {
    return res.status(401).send("Invalid signature");
  }

  res.sendStatus(200);
});`,
      python: `import hmac, hashlib

def verify_signature(payload_bytes, signature, secret):
    expected = hmac.new(secret.encode(), payload_bytes, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)`,
    },
  },
];

export const docsStubSections = [
  {
    title: "Salary API",
    description:
      "Create and manage salary batches programmatically — add employees, validate accounts, submit for approval and track processing status.",
  },
  {
    title: "Bulk Payments",
    description:
      "Submit a batch of payouts in a single request and track per-item status as the batch is processed.",
  },
  {
    title: "Reconciliation",
    description:
      "Pull reconciliation records to match your internal ledger against processed transactions.",
  },
  {
    title: "Reports",
    description:
      "Generate and download transaction, settlement and reconciliation reports for a given date range.",
  },
  {
    title: "Errors",
    description:
      "All endpoints return a consistent error shape with an HTTP status, an error code and a human-readable message.",
  },
  {
    title: "Rate Limits",
    description:
      "API requests are rate-limited per API key. Limits are returned in response headers and vary by plan.",
  },
  {
    title: "Changelog",
    description: "A running log of API changes will be published here as the platform evolves.",
  },
];
