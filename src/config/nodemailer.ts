
/*
*@file nodemailer.js
*@author Jarel Pellew
*@desc Functionality for Sending Emails
*/

import * as nodemailer from "nodemailer";
import { EMAIL_SETTINGS } from "./config";

export const transporter = nodemailer.createTransport(EMAIL_SETTINGS);

