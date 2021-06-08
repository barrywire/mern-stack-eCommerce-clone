import React from "react";

export const showErrorMsg = message => (
    <div className="alert alert-danger" role="alert">
        {message}
    </div>
)

export const showSuccessMsg = message => (
    <div className="alert alert-success" role="alert">
        {message}
    </div>
)