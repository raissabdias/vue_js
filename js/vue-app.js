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
        },
        disableButton: false,
        urlForm: 'app/send.php',
        result: ''
    },
    methods: {
        send: function() {
            if (this.validate()) {
                this.disableButton = true;
                this.result = 'Sendind form...'

                var form = this.formData(this.contact);
                axios.post(this.urlForm, form).then(function(response) {
                    if (response.data == 'sent') {
                        vue.reset();
                        vue.result = 'Message sent!';
                    } else {
                        vue.result = response.data;
                    }

                    vue.disableButton = false;
                });
            }
        },
        clearError: function() {
            this.error.name = this.error.email = this.error.subject = this.error.message = '*';
        },
        validate: function() {
            var error = 0;

            this.clearError();

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
            this.clearError();
            this.result = ''
        },
        formData: function(obj) {
            var formData = new FormData();

            for (var key in obj) {
                formData.append(key, obj[key])
            }

            return formData;
        }
    }
});