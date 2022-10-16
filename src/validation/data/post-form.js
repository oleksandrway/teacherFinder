export const fields = [
  {
    inputName: 'firstName',
  },
  {
    inputName: 'lastName',
  },
  {
    inputName: 'city',
  },
  {
    inputName: 'email',
  },
  {
    inputName: 'phone',
  },
  {
    inputName: 'pictureURL',
  },
  {
    inputName: 'b_date',
  },

]

export const fieldsValidationRules = [
  {
    inputName: 'firstName',
    rules: [
      {
        ruleName: 'required',
      },
      {
        ruleName: 'minLength',
        value: 3,

      },
    ],
  },
  {
    inputName: 'lastName',
    rules: [
      {
        ruleName: 'required',
      },
      {
        ruleName: 'minLength',
        value: 3,

      },
    ],
  },
  {
    inputName: 'city',
    rules: [{
      ruleName: 'required',
    },
    {
      ruleName: 'minLength',
      value: 3,

    },
    ],
  },
  {
    inputName: 'email',
    rules: [{
      ruleName: 'required',
    },
    {
      ruleName: 'email',

    }],
  },
  {
    inputName: 'phone',
    rules: [{
      ruleName: 'required',
    },
    {
      ruleName: 'phone',

    }],
  },
  {
    inputName: 'pictureURL',
    rules: [
      {
        ruleName: 'required',
      },
      {
        ruleName: 'minLength',
        value: 5,

      },
    ],
  },
  {
    inputName: 'b_date',
    rules: [{
      ruleName: 'required',
      SpecificErrorMessage: 'date of birth is required',
    },
    ],
  },

]
