const solveTotalFees = (approvedList) => {
  let totalFee = 0
  let totalProfit = 0

  approvedList.forEach(approved => {
    totalFee += approved.fee
    totalProfit += approved.profit
  })

  const totalPayment = totalFee + totalProfit
  return { totalFee, totalProfit, totalPayment }
}

export default solveTotalFees
