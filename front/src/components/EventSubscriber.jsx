// EventSubscriber.js
import React, { useState, useEffect } from "react";

const EventSubscriber = () => {
  const [channel, setChannel] = useState("product");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const callbackURL = "http://localhost:3001/callback"; // Port 3001 for the API

    // Subscribe to the channel when the component mounts
    fetch(`http://localhost:3001/subscribe/${channel}`, {
      // Updated port for the API
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ callbackURL }),
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error subscribing:", error));

    const eventSource = new EventSource(
      `http://localhost:3001/events/${channel}`
    ); // Updated port for the API
    eventSource.onmessage = (event) => {
      console.log("Received event:", event.data);
      const eventData = JSON.parse(event.data);
      setProducts((prevProducts) => [...prevProducts, eventData]);
    };

    return () => {
      eventSource.close();
    };
  }, [channel]);

  const addProduct = () => {
    fetch("http://localhost:3001/publish/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "New Product",
        price: 99.99,
        date: new Date().toISOString(),
      }),
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error publishing event:", error));
  };
  return (
    <div>
      <p>Subscribed to channel: {channel}</p>
      <button
        type="button"
        class="py-1.5 m-4 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={addProduct}
      >
        <svg
          class="flex-shrink-0 w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z"
          />
        </svg>
        Ajouter un produit
      </button>
      <>
        <div className="">
          {/* <div className="hidden md:grid md:grid-cols-12 md:gap-6 py-2 ">
            <div className="col-span-5">
              <h5 className="text-sm uppercase text-gray-500 dark:text-neutral-500">
                Nom
              </h5>
            </div>
            <div className="col-span-3">
              <h5 className="text-sm uppercase text-gray-500 dark:text-neutral-500">
                Date
              </h5>
            </div>
            <div className="col-span-3">Prix</div>
            <div className="col-span-1"></div>
          </div> */}

          {/* <div className="overflow-y-auto h-full">
            {products.map((product, index) => (
              <ul
                key={index}
                className="grid md:grid-cols-12 md:items-center gap-2 md:gap-6 py-3 border-t border-gray-200 dark:border-neutral-700"
              >
                <li className="md:col-span-5">
                  <div className="flex md:block gap-x-2">
                    <span className="md:hidden min-w-[100px] text-sm text-gray-600 dark:text-neutral-400">
                      Type:
                    </span>
                    <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {product.name}
                    </p>
                  </div>
                </li>
                <li className="col-span-3">
                  <div className="flex md:block gap-x-2">
                    <span className="md:hidden min-w-[100px] text-sm text-gray-600 dark:text-neutral-400">
                      Date:
                    </span>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      {product.date}
                    </p>
                  </div>
                </li>
                <li className="col-span-3">
                  <div className="flex md:block gap-x-2">
                    <span className="md:hidden min-w-[100px] text-sm text-gray-600 dark:text-neutral-400">
                      Price:
                    </span>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      ${product.price}
                    </p>
                  </div>
                </li>
                <li className="col-span-1">
                  <div className="flex md:block gap-x-2">
                    <span className="md:hidden min-w-[100px] text-sm text-gray-600 dark:text-neutral-400">
                      Delete:
                    </span>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    >
                      <svg
                        className="flex-shrink-0 w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M16 6l-1.5-1.5h-7L7 6M18 6v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6" />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            ))}
          </div> */}
        </div>
      </>
    </div>
  );
};

export default EventSubscriber;
