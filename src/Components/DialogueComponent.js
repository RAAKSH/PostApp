import React from 'react';

import Dialog from '@mui/material/Dialog';

import DialogTitle from '@mui/material/DialogTitle';

export function DialogueComponent({ isLoggedIn }) {


    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };

   
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"User Logged In Successfully"}
                    </DialogTitle>
                </Dialog>
            </div>
        );
    
//     else {

//         return (
//             <div>
//                 <Dialog
//                     open={open}
//                     onClose={handleClose}
//                     aria-labelledby="alert-dialog-title"
//                     aria-describedby="alert-dialog-description"
//                 >
//                     <DialogTitle id="alert-dialog-title">
//                         {"User Logged Out Successfully"}
//                     </DialogTitle>
//                 </Dialog>
//             </div>
//         );

//     // }
}

