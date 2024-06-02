import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Hotel = {
  __typename?: 'Hotel';
  id: Scalars['ID']['output'];
  offer: HotelOffer;
  property: HotelProperty;
};

export type HotelCancellationOption = {
  __typename?: 'HotelCancellationOption';
  cancellationType: Scalars['String']['output'];
};

export type HotelImage = {
  __typename?: 'HotelImage';
  caption: Scalars['String']['output'];
  imageType: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type HotelOffer = {
  __typename?: 'HotelOffer';
  cancellationOption: HotelCancellationOption;
  displayPrice: HotelPrice;
  name: Scalars['String']['output'];
  promotion: HotelPromotion;
  savings?: Maybe<HotelPrice>;
};

export type HotelPrice = {
  __typename?: 'HotelPrice';
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
};

export type HotelPromotion = {
  __typename?: 'HotelPromotion';
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type HotelProperty = {
  __typename?: 'HotelProperty';
  address: Array<Scalars['String']['output']>;
  previewImage: HotelImage;
  propertyId: Scalars['ID']['output'];
  rating: HotelRating;
  title: Scalars['String']['output'];
};

export type HotelRating = {
  __typename?: 'HotelRating';
  ratingType: RatingType;
  ratingValue: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  hotels?: Maybe<Array<Hotel>>;
};


export type QueryHotelsArgs = {
  sortBy?: InputMaybe<SortBy>;
};

export type RatingType =
  | 'self'
  | 'star';

export type SortBy =
  | 'PRICE_HIGH_TO_LOW'
  | 'PRICE_LOW_TO_HIGH';

export type GetHotelsQueryVariables = Exact<{
  sortBy?: InputMaybe<SortBy>;
}>;


export type GetHotelsQuery = { __typename?: 'Query', hotels?: Array<{ __typename?: 'Hotel', id: string, property: { __typename?: 'HotelProperty', title: string, address: Array<string>, rating: { __typename?: 'HotelRating', ratingValue: number, ratingType: RatingType }, previewImage: { __typename?: 'HotelImage', url: string, caption: string } }, offer: { __typename?: 'HotelOffer', name: string, displayPrice: { __typename?: 'HotelPrice', amount: number, currency: string }, savings?: { __typename?: 'HotelPrice', amount: number, currency: string } | null, cancellationOption: { __typename?: 'HotelCancellationOption', cancellationType: string }, promotion: { __typename?: 'HotelPromotion', title: string } } }> | null };


export const GetHotelsDocument = gql`
    query GetHotels($sortBy: SortBy) {
  hotels(sortBy: $sortBy) {
    id
    property {
      title
      rating {
        ratingValue
        ratingType
      }
      previewImage {
        url
        caption
      }
      address
    }
    offer {
      name
      displayPrice {
        amount
        currency
      }
      savings {
        amount
        currency
      }
      cancellationOption {
        cancellationType
      }
      promotion {
        title
      }
    }
  }
}
    `;

/**
 * __useGetHotelsQuery__
 *
 * To run a query within a React component, call `useGetHotelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHotelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHotelsQuery({
 *   variables: {
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetHotelsQuery(baseOptions?: Apollo.QueryHookOptions<GetHotelsQuery, GetHotelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHotelsQuery, GetHotelsQueryVariables>(GetHotelsDocument, options);
      }
export function useGetHotelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHotelsQuery, GetHotelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHotelsQuery, GetHotelsQueryVariables>(GetHotelsDocument, options);
        }
export function useGetHotelsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetHotelsQuery, GetHotelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHotelsQuery, GetHotelsQueryVariables>(GetHotelsDocument, options);
        }
export type GetHotelsQueryHookResult = ReturnType<typeof useGetHotelsQuery>;
export type GetHotelsLazyQueryHookResult = ReturnType<typeof useGetHotelsLazyQuery>;
export type GetHotelsSuspenseQueryHookResult = ReturnType<typeof useGetHotelsSuspenseQuery>;
export type GetHotelsQueryResult = Apollo.QueryResult<GetHotelsQuery, GetHotelsQueryVariables>;