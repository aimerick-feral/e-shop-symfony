<?php

namespace App\Service;

use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\String\Slugger\SluggerInterface;


class FileUploader
{
    public function __construct(private SluggerInterface $sluggerInterface)
    {
    }

    /**
     * Method that upload the profile picture of the user. 
     * @param Form $form
     * @param string $pictureFieldName
     * @param string $uploadedFolder
     * @return string $fileName  
     */
    public function uploadFile(Form $form, string $fieldName, string $uploadFolder = null)
    {
        // We get the file to upload. 
        $uploadedFile = $form->get($fieldName)->getData();

        // If we don't have a file. 
        if (!$uploadedFile) {
            // We leave the method. 
            return;
        }

        // dd($form->getName());

        // If the form we have in argument is registration_form or the user_profile or the admin_user. 
        if (
            $form->getName() === 'registration_form' ||
            $form->getName() === 'user_profile' ||
            $form->getName() === 'admin_user'
        ) {
            // The value of $uploadeFolder is the value of the .env variable USER_PICTURE_UPLOAD_FOLDER_PATH.
            $uploadFolder = $_ENV['USER_PICTURE_UPLOAD_FOLDER_PATH'];
        }
        // Else if the form we have in argument is product.
        else if ($form->getName() === 'admin_product') {
            // The value of $uploadeFolder is the value of the .env variable PRODUCT_PICTURE_UPLOAD_FOLDER_PATH.
            $uploadFolder = $_ENV['PRODUCT_PICTURE_UPLOAD_FOLDER_PATH'];
        }
        // Else if the form we have in argument is delivery_mode.
        else if ($form->getName() === 'admin_delivery_mode') {
            // The value of $uploadeFolder is the value of the .env variable DELIVERY_MODE_PICTURE_UPLOAD_FOLDER_PATH.
            $uploadFolder = $_ENV['DELIVERY_MODE_PICTURE_UPLOAD_FOLDER_PATH'];
        }

        // The $originalFileName is the $uploadedFile name witch is the name that the client give him and his path.
        $originalFileName = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);

        // We slugify the $originalFileName. 
        $slugigyFileName = $this->sluggerInterface->slug($originalFileName);

        // We create a $safeFileName for the $uploadedFile by concatenating the  $slugigyFileName of the $uploadedFile with a unique ID generate by the php function uniqid() https://www.php.net/manual/en/function.uniqid.php and the extension of the $uploadedFile.
        $safeFileName = $slugigyFileName . '-' . uniqid() . '.' . $uploadedFile->guessExtension();

        // We try to move the uploaded file.
        try {
            // We move the file to the uploads folder. 
            $uploadedFile->move($uploadFolder, $safeFileName);
        }
        // We catch the errors.
        catch (FileException $errors) {
            // TODO #4 START : handle catch $errors in the uploadFile() method of FileUploader service.



            // TODO #4 END : handle catch $errors in the uploadFile() method of FileUploader service.
        }
        // We return the name of the uploaded file just in case we need it.
        return $safeFileName;
    }
}
