<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;

class ExperimentController extends Controller
{
    public function getExperimentUrl()
    {
        $bucket = env('AWS_BUCKET');
        $key = env('FOLDER_PATH') . '/index.html';

        $s3 = new S3Client([
            'region'  => env('AWS_DEFAULT_REGION'),
            'version' => 'latest',
            'credentials' => [
                'key'    => env('AWS_ACCESS_KEY_ID'),
                'secret' => env('AWS_SECRET_ACCESS_KEY'),
            ],
        ]);


        // Generate a pre-signed URL for the S3 object
        $cmd = $s3->getCommand('GetObject', [
            'Bucket' => $bucket,
            'Key'    => $key,
        ]);

        $request = $s3->createPresignedRequest($cmd, '+5 minutes');
        $presignedUrl = (string) $request->getUri();

        return response()->json(['url' => $presignedUrl]);
    }
}