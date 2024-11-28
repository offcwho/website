'use client'

import Link from "next/link";
import { useState } from "react";

export default function Form({ children }){
    
    return(
        <form className="form__form" onSubmit={handleFormSubmit}>
            {children}
        </form>
        
    )
}