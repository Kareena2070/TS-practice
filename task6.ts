// 1️⃣ A type PaymentStatus
    // "pending"
    // "completed"
    // "failed"
type PaymentStatus = 'pending' | 'completed' | 'failed'

// 2️⃣ A type PaymentResponse that is union of:
    // { status: "completed"; transactionId: string }
    // { status: "failed"; error: string }
    // { status: "pending"; estimatedTime: number }
type PaymentResponses = 
    |{status: 'completed'; transactionId: string}
    | {status: 'failed'; error: string}
    |{status: 'pending'; estimatedTime: number}


// 3️⃣ Write a function handlePayment(response: PaymentResponse)
    // It should:
    // Log transactionId if completed
    // Log error if failed
    // Log estimatedTime if pending
    // Use proper type narrowing.

function handlePayment(response: PaymentResponses){
    if(response.status === 'completed'){
        console.log(response.transactionId)
    } else if (response.status === 'failed'){
        console.log(response.error)
    }else {
        console.log(response.estimatedTime)
    }
}

handlePayment({
  status: 'completed',
  transactionId: 'TX123'
});
handlePayment({
  status: 'pending',
  estimatedTime: 5
});