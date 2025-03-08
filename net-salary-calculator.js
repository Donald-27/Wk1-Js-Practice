function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
  
    // PAYE Calculation
    let paye;
    if (grossSalary <= 24000) {
      paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
      paye = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
      paye = (24000 * 0.1) + (8333 * 0.25) + ((grossSalary - 32333) * 0.3);
    } else if (grossSalary <= 800000) {
      paye = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((grossSalary - 500000) * 0.325);
    } else {
      paye = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35);
    }
  
    // SHIF Deduction
    const shifDeduction = grossSalary * 0.0275;
  
    // NSSF Deduction
    let nssfDeduction;
    if (grossSalary <= 8000) {
      nssfDeduction = grossSalary * 0.06;
    } else if (grossSalary <= 72000) {
      nssfDeduction = 8000 * 0.06 + (grossSalary - 8000) * 0.06;
    } else {
      nssfDeduction = 8000 * 0.06 + 64000 * 0.06;
    }
  
    // Housing Levy
    const housingLevy = grossSalary * 0.015;
  
    // Calculating the Net Salary
    const netSalary = grossSalary - paye - shifDeduction - nssfDeduction - housingLevy;
  
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE: ${paye}`);
    console.log(`SHIF Deduction: ${shifDeduction}`);
    console.log(`NSSF Deduction: ${nssfDeduction}`);
    console.log(`Housing Levy: ${housingLevy}`);
    console.log(`Net Salary: ${netSalary}`);
  }
  
  // Example usage
  calculateNetSalary(50000, 10000); // Replace with your input values
  