# Web TV Shows

An application that implements a frontend for a warehouse solution’s API.
The frontend lists the available products and quantities, and the articles in each product. The user is able to register a sale,
and the inventory updated accordingly.

By [Adeyemi Babalola](mailto:babalolasimeon@gmail.com)

## Instructions

1. Navigate to [repo](https://github.com/Boasbabs/warehouse-frontend.git)
2. Clone locally using
   `git clone git@github.com:Boasbabs/warehouse-frontend.git`
3. Install dependencies using `yarn install`
4. Run tests using `yarn test`
5. Start your server using `yarn start`
6. Navigate to app in [browser](http://localhost:3000)
7. Enjoy!

## Discussion

I used the following technologies:

- HTML/CSS
- Redux Toolkit : state management
- React
- Jest
- React Testing Library
- Yup & Formik : form validations

I used [create-react-app](https://goo.gl/26jfy4)
to generate the scaffolding for this app.

## Highlights

- Routing implementation
- Code organization/architecture
- Integration tests
- Error handling
- - UI handles unreliable Api
- Modularity

## Bonuses!

- Notification for error or bad network request
- Add UI tests; located in each `features/**/containers`

## Requirements

- List the available products and quantities and the articles in each product.
- ❗The user should be able to register a sale.
