export const fields = [
  {
    inputName: 'full_name',
  },
  {
    inputName: 'course',
  },
  {
    inputName: 'country',
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
    inputName: 'b_date',
  },
  {
    inputName: 'favorite',
  },
  {
    inputName: 'notes',
  },

]

export const fieldsValidationRules = [
  {
    inputName: 'full_name',
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
    inputName: 'b_date',
    rules: [{
      ruleName: 'required',
      SpecificErrorMessage: 'date of birth is required',
    },
    ],
  },

]
