import DisplayName from "./components/DisplayName";
import Greeting from "./components/Greeting";
import VacationBox from "./components/VacationBox";
import { ProductCard, UserCard, Hero } from "./components";
import "./App.css";

const App = () => {
  const name = "Domas";
  const isShortName = name.length <= 5 ? "is short name" : "is long name";

  const checkIsShortName = () => {
    if (name.length <= 5) {
      return <h1>is short name</h1>;
    } else {
      return <h1>is long name</h1>;
    }
  };

  const checkGreeting = (name) => {
    if (!name) {
      return <div>Hello guest, please log in first</div>;
    }
    return <div>Hello {name}, how are you today?</div>;
  };

  const vacationDays = 5;

  const users = [
    { name: "Domas", surname: "Pavilis", vacationDays: 7 },
    { name: "Tomas", surname: "Tamauskas", vacationDays: -5 },
    { name: "Rimas", surname: "Ramkeinas", vacationDays: 20 },
    { surname: "Pavilis", vacationDays: 7 },
    { name: "Tadas", surname: "Tadzuskas", vacationDays: 0 },
  ];

  const namesBlock = users.map((user, index) => (
    <li key={index}>
      {index}.{user.name}
    </li>
  ));

  // map returns a new array with the results of the function,
  // while forEach does not return anything and only modifies the original array
  const names = users.map((user) => user.name); // ['Rokas']
  const namesV2 = users.forEach((user) => user.name); // undefined
  console.log(names);
  console.log(namesV2);

  const fruits = ["Apple", "Banana", "Kiwi", "Apple"];

  const getNames = () => {
    const names = [];

    users.forEach((user) => user.name && names.push(user.name));

    return names;
  };

  const products = [
    {
      id: 1,
      title: "Iphone XR",
      price: 999,
      color: "red",
      image:
        "https://wefix.co.za/cdn/shop/products/iPhone-XR-Black_9450f19b-803f-432d-8c43-2c312dd9ea50.png?v=1701412353",
    },
    {
      id: 2,
      title: "Iphone XS",
      price: 1099,
      color: "black",
      image:
        "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-xs-max/iphone-xs-max-silver.jpg",
    },
    {
      id: 3,
      title: "Samsung 20",
      price: 799,
      color: "blue",
      image:
        "https://img.merkandi.com/imgcache/resized/images/offer/2021/05/21/samsung-s20-5g-bleu-1-1621589588.jpg",
    },
  ];

  return (
    <div>
      <br />
      <p>Shopping list:</p>
      <ol>
        {fruits.map((fruit, index) => (
          <li key={`${fruit}_${index}`}>{fruit}</li>
        ))}
      </ol>
      <br />
      <ul>{namesBlock}</ul>
      <br />
      <ul>
        {users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
      <br />
      {isShortName}
      <br />
      {checkIsShortName()}
      <br />
      <Greeting name={name} />
      <br />
      {checkGreeting()}
      {checkGreeting(name)}
      <br />
      <br />
      <br />
      <DisplayName name={name} />
      <DisplayName name="Tadukas" />
      <VacationBox name="Romas" count={0} />
      <VacationBox name="Tadukas" count={-2} />
      <VacationBox name={name} count={vacationDays} />
      <VacationBox name="Rimas" count={24} />
      <VacationBox count={24} />
      <br />
      <br />
      {users.map((user) => (
        <VacationBox
          key={`${user.name} ${user.surname}`}
          name={`${user.name || ""} ${user.surname}`}
          count={user.vacationDays}
        />
      ))}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <br />
        <UserCard
          user={{
            id: 1,
            name: "Domas",
            surname: "Pavils",
            image:
              "https://cdn4.iconfinder.com/data/icons/people-14/24/Female-2-512.png",
          }}
        />
      </div>

      <Hero title="Info" subtitle="Sub title" />
      <br />
      <Hero title="Info" />
    </div>
  );
};

export default App;
