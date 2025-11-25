import { Resend } from "resend";
import { AppError } from "../utils/appError";

class EmailService {
    private readonly resend: Resend;
    private readonly FROM_EMAIL: string;
    
    constructor(){
        if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL) {
            throw new AppError('Resend api key or from_email must be defined in the enviroment variables', 500);
        }

        this.resend = new Resend(process.env.RESEND_API_KEY);
        this.FROM_EMAIL = process.env.FROM_EMAIL;
    }

    async sendPaymentSuccess(to: string, data: { companyName: string, plan: string, amount: number, invoiceUrl: string }) {
        await this.resend.emails.send({
            from: this.FROM_EMAIL,
            to: to,
            subject: `Payment Successful - ${data.plan} plan`,
            html: this.paymentSuccessTemplate(data),
        });
    }

    async sendSubscriptionCanceled(to: string, data: { companyName: string, plan: string }) {
        await this.resend.emails.send({
            from: this.FROM_EMAIL,
            to: to,
            subject: `Subscription Canceled`,
            html: this.subscriptionCanceledTemplate(data),
        });
    }

    async sendPaymentFailed(to: string, data: { companyName: string, plan: string, amount: number, updatePaymentUrl: string }) {
        await this.resend.emails.send({
            from: this.FROM_EMAIL,
            to: to,
            subject: `Payment Failed`,
            html: this.paymentFailedTemplate(data),
        });
    }

    async sendSubscriptionUpdated(to: string, data: { companyName: string, oldPlan: string, newPlan: string }) {
        try {
            await this.resend.emails.send({
                from: this.FROM_EMAIL,
                to: to,
                subject: 'Subscription Updated',
                html: this.subscriptionUpdatedTemplate(data),
            });

        } catch(error) {
            throw error;
        }
    }

    private paymentSuccessTemplate(data: any) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
                    .content { padding: 20px; background-color: #f9f9f9; }
                    .button { 
                        display: inline-block; 
                        padding: 12px 24px; 
                        background-color: #4CAF50; 
                        color: white; 
                        text-decoration: none; 
                        border-radius: 5px; 
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>🎉 Payment Successful!</h1>
                    </div>
                    <div class="content">
                        <p>Hi <strong>${data.companyName}</strong>,</p>
                        <p>Your payment of <strong>$${(data.amount / 100).toFixed(2)}</strong> for the <strong>${data.plan}</strong> plan has been processed successfully.</p>
                        <p>Thank you for your business!</p>
                        <a href="${data.invoiceUrl}" class="button">View Invoice</a>
                    </div>
                </div>
            </body>
            </html>
        `;
    }

    private paymentFailedTemplate(data: any) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #ff4444; color: white; padding: 20px; text-align: center; }
                    .content { padding: 20px; background-color: #f9f9f9; }
                    .button { 
                        display: inline-block; 
                        padding: 12px 24px; 
                        background-color: #ff4444; 
                        color: white; 
                        text-decoration: none; 
                        border-radius: 5px; 
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>⚠️ Payment Failed</h1>
                    </div>
                    <div class="content">
                        <p>Hi <strong>${data.companyName}</strong>,</p>
                        <p>We were unable to process your payment of <strong>$${(data.amount / 100).toFixed(2)}</strong> for your <strong>${data.plan}</strong> subscription.</p>
                        <p><strong>Action Required:</strong> Please update your payment method within 3 days to avoid service interruption.</p>
                        <a href="${data.updatePaymentUrl}" class="button">Update Payment Method</a>
                    </div>
                </div>
            </body>
            </html>
        `;
    }

    private subscriptionCanceledTemplate(data: any) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #666; color: white; padding: 20px; text-align: center; }
                    .content { padding: 20px; background-color: #f9f9f9; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Subscription Canceled</h1>
                    </div>
                    <div class="content">
                        <p>Hi <strong>${data.companyName}</strong>,</p>
                        <p>Your <strong>${data.plan}</strong> subscription has been canceled.</p>
                        <p>Your account has been downgraded to the <strong>FREE</strong> plan with 3 searches per month.</p>
                        <p>We're sorry to see you go! You can resubscribe anytime from your dashboard.</p>
                    </div>
                </div>
            </body>
            </html>
        `;
    }

    private subscriptionUpdatedTemplate(data: any) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
                    .header { background-color: #2196F3; color: white; padding: 30px; text-align: center; }
                    .content { padding: 30px; background-color: #f9f9f9; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>📝 Subscription Updated</h1>
                </div>
                <div class="content">
                    <p>Hi <strong>${data.companyName}</strong>,</p>
                    <p>Your subscription has been updated from <strong>${data.oldPlan}</strong> to <strong>${data.newPlan}</strong>.</p>
                    <p>Your new features are now active!</p>
                </div>
            </body>
            </html>
        `;
    }
}

export const emailService = new EmailService();
