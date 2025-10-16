import type { Schema, Struct } from '@strapi/strapi';

export interface BookingAdvancePayment extends Struct.ComponentSchema {
  collectionName: 'components_booking_advance_payments';
  info: {
    displayName: 'advance_payment';
    icon: 'bold';
  };
  attributes: {
    amount: Schema.Attribute.Integer;
    date: Schema.Attribute.Date;
    mode: Schema.Attribute.String;
    remark: Schema.Attribute.String;
  };
}

export interface BookingFoodItems extends Struct.ComponentSchema {
  collectionName: 'components_booking_food_items';
  info: {
    displayName: 'food_items';
    icon: 'cog';
  };
  attributes: {
    amount: Schema.Attribute.Decimal;
    gst: Schema.Attribute.Decimal;
    hsn: Schema.Attribute.String;
    invoice: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    item: Schema.Attribute.String;
    qty: Schema.Attribute.Integer;
    rate: Schema.Attribute.Decimal;
    room: Schema.Attribute.String;
  };
}

export interface BookingPaymentTokens extends Struct.ComponentSchema {
  collectionName: 'components_booking_payment_tokens';
  info: {
    displayName: 'payment_tokens';
    icon: 'attachment';
  };
  attributes: {
    amount: Schema.Attribute.Decimal;
    date: Schema.Attribute.Date;
    mode: Schema.Attribute.String;
    remark: Schema.Attribute.String;
  };
}

export interface BookingRoomTokens extends Struct.ComponentSchema {
  collectionName: 'components_booking_room_tokens';
  info: {
    displayName: 'room_tokens';
    icon: 'attachment';
  };
  attributes: {
    amount: Schema.Attribute.Decimal;
    days: Schema.Attribute.Integer;
    gst: Schema.Attribute.Decimal;
    hsn: Schema.Attribute.String;
    invoice: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    item: Schema.Attribute.String;
    rate: Schema.Attribute.Decimal;
    room: Schema.Attribute.String;
  };
}

export interface RestaurantMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_restaurant_menu_items';
  info: {
    displayName: 'menu_items';
    icon: 'alien';
  };
  attributes: {
    amount: Schema.Attribute.Decimal;
    gst: Schema.Attribute.Decimal;
    hsn: Schema.Attribute.String;
    invoice: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    item: Schema.Attribute.String;
    qty: Schema.Attribute.Integer;
    rate: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'booking.advance-payment': BookingAdvancePayment;
      'booking.food-items': BookingFoodItems;
      'booking.payment-tokens': BookingPaymentTokens;
      'booking.room-tokens': BookingRoomTokens;
      'restaurant.menu-items': RestaurantMenuItems;
    }
  }
}
