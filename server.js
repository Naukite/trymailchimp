require('dotenv').config()

const mailchimpClient = require("@mailchimp/mailchimp_transactional")(
    process.env.MAILCHIMP_API_KEY
);

const run = async () => {
    const response = await mailchimpClient.messages.send({
        message: {
            to: [
                {
                    "email": "ndiaz@expertone.es",
                    "name": "Nau"
                },
                {
                    "email": "doliveira@expertone.es",
                    "name": "Deivi"
                },
                {
                    "email": "jmartinez@expertone.es",
                    "name": "Juan"
                }                                
            ],
            from_email: "marketing@recordrentacar.com",
            subject: 'This is a test from nau',
            html: "<h1>'Here you can say whatever you like</h1><p>. For example, this is so easy... i love developing (heart heart heart). Qué pasa chavales?'</p>"
        }
    });
    console.log(response);
};

run();
