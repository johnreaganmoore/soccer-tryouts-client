import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import config from '../config/environment';

export default EmberUploader.FileField.extend({
  signingUrl: `http://localhost:3000/sign`,
  onComplete: 'onComplete',
  filesDidChange (files) {
    const uploader = EmberUploader.S3Uploader.create({
      signingUrl: this.get('signingUrl')
    });

    uploader.on('didUpload', response => {
      // S3 will return XML with url
      let uploadedUrl = $(response).find('Location')[0].textContent;
      // http://yourbucket.s3.amazonaws.com/file.png
      uploadedUrl = decodeURIComponent(uploadedUrl);

      let key = decodeURIComponent(
                  $(response).find('Key')[0].textContent
                );

      this.sendAction('onComplete', {
        fullUrl: uploadedUrl, key: key
      });

    });

    if (!Ember.isEmpty(files)) {
      // Send a sign request then upload to S3
      // this second argument is optional and can to be sent as extra data with the upload
      uploader.upload(files[0], {});
    }
  }
});
