var vue = new Vue({
    el: '#app',
    data: {
        error: {
            name: '*',
            email: '*',
            subject: '*',
            message: '*'
        },
        contact: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    },
    methods: {
        send: function() {
            if (this.validate()) {
                alert('success');
            }
        },
        validate: function() {
            var error = 0;

            // Restore original value
            this.error.name = this.error.email = this.error.subject = this.error.message = '*';

            if (this.contact.name.length < 6) {
                this.error.name = ' Name must have at least 6 characters';
                error++;
            }

            if (this.contact.email.indexOf("@") < 0) {
                this.error.email = ' Invalid email';
                error++;
            }

            if (this.contact.subject.length < 1) {
                this.error.subject = ' Name must have at least 1 character';
                error++;
            }

            if (this.contact.message.length < 1) {
                this.error.message = ' Name must have at least 1 character';
                error++;
            }

            return (error === 0);
        },
        reset: function() {
            this.contact.name = this.contact.email = this.contact.subject = this.contact.message = '';
            this.error.name = this.error.email = this.error.subject = this.error.message = '*';
        }
    }
});