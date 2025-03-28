interface StepOneData {
    fullName: string;
    email: string;
    phone: string;
  }
  
  interface StepTwoData {
    streetAddress: string;
    city: string;
    zipCode: string;
  }
  
  interface StepThreeData {
    username: string;
    password: string;
    confirmPassword: string;
  }
  
  export type MultiStepFormData = StepOneData & StepTwoData & StepThreeData;
  