import React from 'react'

import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';
import ImageIcon from '@material-ui/icons/Image';

const FormChatComponent = () => {
    return (
        <div className="pb-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-b-lg py-2">
                <form className="flex items-center space-x-2 w-full px-4">
                    <div className="flex-1 flex flex-row items-center bg-white dark:bg-gray-900 shadow rounded-lg">
                        <label className="flex-none w-12 flex items-center justify-center dark:text-indigo-50">
                            <AttachmentIcon style={{fontSize:24}}/>
                        </label>
                        <label className="flex-none w-12 flex items-center justify-center dark:text-indigo-50">
                            <ImageIcon style={{fontSize:24}}/>
                        </label>
                        <input type="text" className="flex-1 bg-transparent appearance-none border py-3 focus-visible:none focus:none border-none border-transparent" placeholder="type text here.." />
                        <button className="flex-none w-12 h-12 bg-primary-base text-white rounded-lg border-2 border-white dark:border-gray-900">
                            <SendIcon style={{fontSize:24}} />
                        </button>
                    </div>
                    <div className="flex-none w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-gray-900 dark:text-indigo-50 shadow">
                        <KeyboardVoiceIcon style={{fontSize:22}} />
                    </div>
                </form>
            </div> 
        </div>
        
    )
}

export default FormChatComponent
