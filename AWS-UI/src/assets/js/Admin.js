function ValidateAdminLogin(salt) {


       var ctrlId = document.getElementById('txt_login');
    var ctrlPwd = document.getElementById('txt_pwd');

    var isValid = false;
    isValid = IsRequired(ctrlId, null, "Please Enter User Id.");
    if (isValid == true) {
        var len = ctrlId.value.length;
        if (len < 7 || len > 50) {
                alert("Invalid Candidate User Id OR Password.");
            ctrlId.value = "";
            ctrlId.focus();
            isValid = false;
        }
    }
    if (isValid == true)
        isValid = IsRequired(ctrlPwd, null, "Please Enter Your Password.");
    if (isValid == true) {
        var len = ctrlPwd.value.length;
        if (len > 13 || len < 4) {
            alert("Invalid Candidate User Id OR Password.");
            ctrlPwd.value = "";
            ctrlPwd.focus();
            isValid = false;
        }
    }
    if (isValid == true) {
        ctrlPwd.value = (sha256(ctrlPwd.value));
        
        ctrlPwd.value = (sha256(ctrlPwd.value + salt));
       
    }
    return (isValid);
}
function EncDataCreateAdmin(salt) {
    if (document.getElementById('txtuserid').value == "" || document.getElementById('Txtfullname').value == "" || document.getElementById('txtmobile').value == "") {
        alert('All fields are mandatory?');
        return false;
    }
    document.getElementById('HiddenField3').value = "";
    document.getElementById('HiddenField3').value = document.getElementById('HiddenField3').value + document.getElementById('txtuserid').value.toUpperCase();
    document.getElementById('HiddenField3').value = document.getElementById('HiddenField3').value + document.getElementById('Txtfullname').value.toUpperCase();
    document.getElementById('HiddenField3').value = document.getElementById('HiddenField3').value + document.getElementById('txtmobile').value.toUpperCase();
    document.getElementById('HiddenField3').value = (sha256(document.getElementById('HiddenField3').value + salt)).toUpperCase();
    return (true);
}


function ValidateLoginForCandidate(salt) {
    var ctrlPwd = document.getElementById('regnoTBox');
    var isValid1 = false;
    isValid1 = IsRequired(ctrlPwd, null, "Please Enter Your Password.");
    if (isValid1 == true) {
        var len = ctrlPwd.value.length;
        if (len != 9) {
            alert("Invalid Candidate User Id OR Password.");
            ctrlPwd.value = "";
            ctrlPwd.focus();
            isValid1 = false;
        }
    }
    if (isValid1 == true) {
        ctrlPwd.value = (sha256(ctrlPwd.value));
        ctrlPwd.value = (sha256(ctrlPwd.value + salt));
        ValidateAdminLogin(salt);
    }

}

function EncPassData1() {
       var txt_cpwd = document.getElementById('txt_cpwd');
    var txt_oldpassword = document.getElementById('txt_oldpassword');
    var ctrlPwd = document.getElementById('txt_pwd');
    var Sec_ans_Text = document.getElementById('Sec_ans_Text');
    if (txt_cpwd.value == "" || ctrlPwd.value == "" || Sec_ans_Text.value == "" || txt_oldpassword.value == "") {

        alert('All fields are mandatory?');
        return false;
    }
    if (document.getElementById('txt_pwd').value != "") {
        var a = new RegExp("^(?=.{8,13})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        if (!a.test(document.getElementById('txt_pwd').value)) {
            alert('Your password must satisfy the following. \n\n* Password should be 8 to 13 character long. \n* Password should have at least one Upper case alphabet.\n* Password should have at least one Lower case alphabet. \n* Password should have at least one numeric value. \n* Password should have at least one special characters eg.!@#$%^&*-');
            return false;
        }
    

        document.getElementById('txt_oldpassword').value = (sha256(document.getElementById('txt_oldpassword').value));
        document.getElementById('txt_pwd').value = (sha256(document.getElementById('txt_pwd').value));
        document.getElementById('txt_cpwd').value = (sha256(document.getElementById('txt_cpwd').value));
        document.getElementById('Sec_ans_Text').value = (sha256(document.getElementById('Sec_ans_Text').value));
           return (true);
    }

}


function help() {
    alert('Passwords will contain at least (1) upper case letter(A-Z) \n Passwords will contain at least (1) lower case letter(a-z) \n Passwords will contain at least (1) number(0-9) \n Passwords will contain at least (1) special character (eg...@#$%^&amp;+=)  \n Passwords will contain 8-13 characters in length');
    return false;
}


function EncData() {

    if (document.getElementById('txtnewpass').value == "" || document.getElementById('txtoldpass').value == "" || document.getElementById('txtconfnewpass').value == "") {

        alert('All fields are mandatory?');
        return false;
    }
    if (document.getElementById('txtnewpass').value != "") {
        var a = new RegExp("^(?=.{8,13})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        if (!a.test(document.getElementById('txtnewpass').value)) {
            alert('Your password must satisfy the following. \n\n* Password should be 8 to 13 character long. \n* Password should have at least one Upper case alphabet.\n* Password should have at least one Lower case alphabet. \n* Password should have at least one numeric value. \n* Password should have at least one special characters eg.!@#$%^&*-');
            return false;
        }

        document.getElementById('txtoldpass').value = (sha256(document.getElementById('txtoldpass').value)).toUpperCase();
        document.getElementById('txtnewpass').value = (sha256(document.getElementById('txtnewpass').value)).toUpperCase();
        document.getElementById('txtconfnewpass').value = (sha256(document.getElementById('txtconfnewpass').value)).toUpperCase();
        return (true);
    }

}


function popupConfirmationPageByAdmin() {
    my_window = window.open('ConfirmationPageByAdmin.aspx', '_blank', 'width=900,height=700,toolbar=0,resizable=1,scrollbars=1,menubar=0,status=1');
}



function isFireFox() {
    return navigator.appName == "Netscape";
}
function SelectAllCheckboxes(spanChk) {
    // Added as ASPX uses SPAN for checkbox

    //var oItem = spanChk.children;
    var theBox = (spanChk.type == "checkbox") ? spanChk : spanChk.children.item[0];
    xState = theBox.checked;
    elm = theBox.form.elements;
    for (i = 0; i < elm.length; i++)
        if (elm[i].type == "checkbox" && elm[i].id != theBox.id) {
            //elm[i].click();
            if (elm[i].checked != xState)
                elm[i].click();
            //elm[i].checked=xState;
        }
}

//**END *************************** view comments/suggestions *******************


function ValidateUpdate() {
    if (document.getElementById('chbAgreement').checked == true) {
        return confirm('Are you sure, you want to allow downloading confirmation page?');
    }
    else {
        alert('Kindly select the agreement.');
        return false;
    }
}





function isvaliddate(sender, args) {
    var a = args.Value;
    if (a.length < 10 || a.length > 10) {
        args.IsValid = false;
        return;
    }
    var datePat = /^(\d{2})(\/)(\d{2})\2(\d{4})$/;
    var matchArray = a.match(datePat); // is the format ok?
    if (matchArray == null) {
        args.IsValid = false;
        return;
    }
    day = matchArray[1]; // parse date into variables
    month = matchArray[3];
    year = matchArray[4];
    if (month < 1 || month > 12) { // check month range
        args.IsValid = false;
        return;
    }
    if (day < 1 || day > 31) {
        args.IsValid = false;
        return;
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        args.IsValid = false;
        return;
    }
    if (month == 2) { // check for february 29th
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !isleap)) {
            args.IsValid = false;
            return;
        }
    }
    args.IsValid = true;  // date is valid
}


function DoBlur(fld) {
    fld.className = 'textboxes1';
}

function DoFocus(fld) {
    fld.className = 'textboxes3';
}


function EncNewUserData() {
    Page_ClientValidate();
    if (Page_IsValid) {
    }
    else {

        return false;
    }

    if (document.getElementById('ctl00_ContentPlaceHolder1_txtpass').value != "") {
        var a = new RegExp("^(?=.{8,15})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        if (!a.test(document.getElementById('ctl00_ContentPlaceHolder1_txtpass').value)) {
            alert('Your password must satisfy the following. \n\n* Password should be 8 to 15 character long. \n* Password should have at least one Upper case alphabet.\n* Password should have at least one Lower case alphabet. \n* Password should have at least one numeric value. \n* Password should have at least one special characters eg.!@#$%^&*-');
            return false;
        }
        document.getElementById('ctl00_ContentPlaceHolder1_txtpass').value = (sha256(document.getElementById('ctl00_ContentPlaceHolder1_txtpass').value)).toUpperCase();
        document.getElementById('ctl00_ContentPlaceHolder1_txtconfpass').value = (sha256(document.getElementById('ctl00_ContentPlaceHolder1_txtconfpass').value)).toUpperCase();
        document.getElementById('ctl00_ContentPlaceHolder1_txtsecans').value = (sha256(document.getElementById('ctl00_ContentPlaceHolder1_txtsecans').value.toUpperCase())).toUpperCase();
        return (true);
    }

}

function ResetData() {
    document.getElementById('ctl00_ContentPlaceHolder1_txtfname').value = ""
    document.getElementById('ctl00_ContentPlaceHolder1_txtlname').value = ""
    document.getElementById('ctl00_ContentPlaceHolder1_txtdesig').value = ""
    document.getElementById('ctl00_ContentPlaceHolder1_txtemail').value = ""
    //document.getElementById('ctl00_ContentPlaceHolder1_txtgstdcode').value = ""
    //document.getElementById('ctl00_ContentPlaceHolder1_txtgphoneno').value = ""
    document.getElementById('ctl00_ContentPlaceHolder1_txtusername').value = ""
    document.getElementById('ctl00_ContentPlaceHolder1_txtpass').value = ""
    document.getElementById('ctl00_ContentPlaceHolder1_txtconfpass').value = ""
    document.getElementById('ctl00_ContentPlaceHolder1_txtsecans').value = ""
    document.getElementById('ctl00_ContentPlaceHolder1_txtpin').value = ""
    document.getElementById('ctl00_ContentPlaceHolder1_ddlsecques').value = "0"
    document.getElementById('ctl00_ContentPlaceHolder1_ddlrole').value = "0"
    document.getElementById('ctl00_ContentPlaceHolder1_ddlsalutaion').value = "0"
    return false;

}

	

