import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CancellationOption = {
  __typename?: "CancellationOption";
  cancellationType?: Maybe<Scalars["String"]["output"]>;
};

export type DisplayPrice = {
  __typename?: "DisplayPrice";
  amount?: Maybe<Scalars["Float"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
};

export type Hotel = {
  __typename?: "Hotel";
  id?: Maybe<Scalars["String"]["output"]>;
  offer?: Maybe<Offer>;
  property?: Maybe<Property>;
};

export type Offer = {
  __typename?: "Offer";
  cancellationOption?: Maybe<CancellationOption>;
  displayPrice?: Maybe<DisplayPrice>;
  name?: Maybe<Scalars["String"]["output"]>;
  promotion?: Maybe<Promotion>;
  savings?: Maybe<Savings>;
};

export type PreviewImage = {
  __typename?: "PreviewImage";
  caption?: Maybe<Scalars["String"]["output"]>;
  imageType?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Promotion = {
  __typename?: "Promotion";
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type Property = {
  __typename?: "Property";
  address?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  previewImage?: Maybe<PreviewImage>;
  propertyId?: Maybe<Scalars["String"]["output"]>;
  rating?: Maybe<Rating>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  hotels?: Maybe<Array<Maybe<Hotel>>>;
};

export type QueryHotelsArgs = {
  sortBy?: InputMaybe<SortBy>;
};

export type Rating = {
  __typename?: "Rating";
  ratingType?: Maybe<Scalars["String"]["output"]>;
  ratingValue?: Maybe<Scalars["Float"]["output"]>;
};

export type Savings = {
  __typename?: "Savings";
  amount?: Maybe<Scalars["Float"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
};

export type SortBy = "PRICE_HIGH_TO_LOW" | "PRICE_LOW_TO_HIGH";

export type GetHotelsQueryVariables = Exact<{
  sortBy?: InputMaybe<SortBy>;
}>;

export type GetHotelsQuery = {
  __typename?: "Query";
  hotels?: Array<{
    __typename?: "Hotel";
    id?: string | null;
    property?: {
      __typename?: "Property";
      title?: string | null;
      rating?: { __typename?: "Rating"; ratingValue?: number | null } | null;
    } | null;
    offer?: {
      __typename?: "Offer";
      name?: string | null;
      displayPrice?: {
        __typename?: "DisplayPrice";
        amount?: number | null;
        currency?: string | null;
      } | null;
    } | null;
  } | null> | null;
};

export const GetHotelsDocument = gql`
  query GetHotels($sortBy: SortBy) {
    hotels(sortBy: $sortBy) {
      id
      property {
        title
        rating {
          ratingValue
        }
      }
      offer {
        name
        displayPrice {
          amount
          currency
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
export function useGetHotelsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetHotelsQuery, GetHotelsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetHotelsQuery, GetHotelsQueryVariables>(
    GetHotelsDocument,
    options
  );
}
export function useGetHotelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHotelsQuery,
    GetHotelsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetHotelsQuery, GetHotelsQueryVariables>(
    GetHotelsDocument,
    options
  );
}
export function useGetHotelsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetHotelsQuery,
    GetHotelsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetHotelsQuery, GetHotelsQueryVariables>(
    GetHotelsDocument,
    options
  );
}
export type GetHotelsQueryHookResult = ReturnType<typeof useGetHotelsQuery>;
export type GetHotelsLazyQueryHookResult = ReturnType<
  typeof useGetHotelsLazyQuery
>;
export type GetHotelsSuspenseQueryHookResult = ReturnType<
  typeof useGetHotelsSuspenseQuery
>;
export type GetHotelsQueryResult = Apollo.QueryResult<
  GetHotelsQuery,
  GetHotelsQueryVariables
>;
