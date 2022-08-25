<?php

namespace App\Service\Api;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class MultiAvatarAPI
{
    public function __construct(private HttpClientInterface $httpClientInterface)
    {
    }

    /**
     * Method that get, from the API, the avatar of the user according to is first name  and a token.  
     * @param string $userFirstName
     * @return string the URL to donwload the avatar from the API server. 
     */
    public function fetch(string $userFirstName)
    {
        // We get the response of the request. 
        // We indicate the HTTP method that we use, the API URL and the name which is a string that are need from the API. 
        // The name is the user first name with a token in order to have a uniq avatar for each user. 
        $response = $this->httpClientInterface->request('GET', 'https://api.multiavatar.com/' . strtolower($userFirstName) . '-' . bin2hex(random_bytes(12)));
        // $response = $this->httpClientInterface->request('GET', 'https://api.multiavatar.com/' . strtolower($userFirstName));

        // The HttpClientInterface is related to the ResponseInterface. 
        // We return the URL of the response by calling the getInfo() method of the ResponseInterface on the 'url' key. 
        return $response->getInfo()['url'] . '.png';
    }
    /**
     * Method that donwload the avatar from the API with the URL. 
     * @param string $url
     * @param string $uploadedFolder
     * @return string $fileName  
     */
    public function donwloadAvatar(string $url, string $uploadFolder = null)
    {
        // The value of $uploadeFolder is the value of the .env variable USER_PICTURE_UPLOAD_FOLDER_PATH.
        $uploadFolder = $_ENV['USER_PICTURE_UPLOAD_FOLDER_PATH'];
        // assets/uploads/pictures/users

        // We use the PHP function basename() to get the trailing name the component of the path. 
        // Exemple : "from https://api.multiavatar.com/toto-46d7d6702041b84dcdf0a3c6.png" we get "toto-46d7d6702041b84dcdf0a3c6.png". 
        $fileName = basename($url);

        // We get the content of the URL with the help of the PHP method file_get_contents(). 
        // We use the PHP method file_put_contents() to write this content into the file. 
        file_put_contents($fileName, file_get_contents($url));

        // If the file exist on the server. 
        if (file_exists($fileName)) {
            // For now the file is donwloaded on the server but is not in the right directory so we need to move in to the upload folder previously defined. 
            // We use the PHP function rename() with, in first argument, the location (the path) of the current file returned by the PHP dirname() function + the name of the file and, in second argument, the location of the directory where we want to move the file. 

            // If user action. 
            // rename($fileName, $uploadFolder . "/" . $fileName);

            // If fixtures. 
            rename(dirname($fileName) . "/" . $fileName, "public/" . $uploadFolder . "/" . $fileName);

            // We return the name of the donwloaded file just in case we need it.
            return $fileName;
        }
    }
}
