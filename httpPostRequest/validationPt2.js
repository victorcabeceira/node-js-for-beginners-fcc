const Joi = require('joi');

const arrayString = ['string1', 'string2', 'string3'];
const arrayObjects = [{ example: 'example1' }, { example: 'example2' }];

const userInput = {
  personalInfo: { streetAddress: '123123123', city: 'blablabla', state: 'bl' },
  // preferences: arrayString,
  preferences: arrayObjects,
};

const personalInfoSchema = Joi.object().keys({
  streetAddress: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().trim().length(2).required(),
});

// const preferencesSchema = Joi.array().items(Joi.string());
const preferencesSchema = Joi.array().items(
  Joi.object().keys({
    example: Joi.string().required(),
  })
);

const schema = Joi.object().keys({
  personalInfo: personalInfoSchema,
  preferences: preferencesSchema,
});

Joi.validate(userInput, schema, (error, result) => {
  if (error) console.log({ error });
  else console.log({ result });
});
