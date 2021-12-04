export const Confirmation = (req, res) => {
  const accountSid = "AC649ca4786aa708939afa42330802dc1f";
  const authToken = "4d1ab741e5c3a6d386cdd7aef8668a99";
  const myPhone = "+18296429311";
  const client = require("twilio")(accountSid, authToken);
  const { otp } = req.body;
  const data = {
    verified: true,
  };

  client.messages
    .create({
      to: myPhone,
      from: "+13374356043",
      body: otp,
    })
    .then((message) => console.log(message))
    .catch((error) => {
      console.log(error);
    });

  res.send(data);
  console.log(otp + "my code");
};
