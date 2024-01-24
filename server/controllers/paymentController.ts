import { Request, Response, query } from 'express';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe' 

const prisma = new PrismaClient();
const stripe = new Stripe('sk_test_51ObgWwLDiPccFavS98jUiqLh81IW7tDd20ME1sUubdZhVTrFcb0pZ9BYKmODqD8XcO9KeiKgywlrnYJ10bydxWrO005OP3eqHF');
const STRIPE_Key='pk_test_51ObgWwLDiPccFavSFtc8zJkEukmAAxX1SnCLl2UZe4y1cHUgGqcJp7CWtN4MDfg0obElh2cFmRWDwgxGZHpUO7wf00RcQlKJKJ'

export const Intent = async (req:Request, res:Response) => {
    // Use an existing Customer ID if this is a returning customer.
    const user = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: user.id},
      {apiVersion: '2023-10-16'}
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: 'eur',
      customer: user.id,
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: user.id,
      publishableKey: STRIPE_Key
    });
  }