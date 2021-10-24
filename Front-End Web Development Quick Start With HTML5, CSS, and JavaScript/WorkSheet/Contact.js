// Contact.js

export default class Contact {

    constructor(form) {
        this.fullname = form.elements["fullName"].value;
        this.email = form.elements["email"].value;
        this.subject = form.elements["subject"].value;
        this.body = form.elements["msg"].value;
    }

    fullname = "";
    email = "";
    subject = "";
    body = "";

    send() {
        console.info(this.formatMessage());
        // showMessage("We are not sending email yet .... this is for the version2");
        // change needed because if the self contained module/blocks of code
        document.getElementById("formInfo").innerHTML=
            "We are not sending email yet .... this is for the version2";
    }

    formatMessage() {
        return `To : ${this.fullname}
                Email : ${this.email}
                Subject : ${this.subject}
                Body : ${this.body}`;
    }

};