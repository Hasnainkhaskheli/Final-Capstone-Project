import React from "react";

const ShopByBrand = () => {
  const brands = [
    { name: "Samsung", logo: "https://static.priceoye.pk/images/brands/svg/samsung.svg" },
    { name: "Infinix", logo: "https://static.priceoye.pk/images/brands/svg/infinix.svg" },
    { name: "OPPO", logo: "https://static.priceoye.pk/images/brands/svg/oppo.svg" },
    { name: "Xiaomi", logo: "https://static.priceoye.pk/images/brands/svg/xiaomi.svg" },
    { name: "Vivo", logo: "https://static.priceoye.pk/images/brands/svg/vivo.svg" },
    { name: "Tecno", logo: "https://static.priceoye.pk/images/brands/svg/tecno.svg" },
    { name: "Realme", logo: "https://static.priceoye.pk/images/brands/svg/realme.svg" },
    { name: "itel", logo: "https://static.priceoye.pk/images/brands/svg/itel.svg" },
    { name: "Apple", logo: "https://static.priceoye.pk/images/brands/svg/apple.svg" },
    { name: "Nokia", logo: "https://static.priceoye.pk/images/brands/svg/nokia.svg" },
  ];

  const reviews = [
    {
      name: "Usman Fazal",
      date: "18 December 2024",
      comment:
        "very good packing very fast delivery new and genuine mobile thanks price oye highly recomended price oye is best than draz iam...",
      rating: 5,
      image: "https://images.priceoye.pk/review/7867/1562720-drhin-270x270.jpg",
    },
    {
      name: "Hasnain",
      date: "17 December 2024",
      comment:
        "Price ky hissab sy boht acha phone hai main week use krny ky bad review dall raha paisa wasool phone hai and thanks price oye boht ac...",
      rating: 5,
      image: "https://images.priceoye.pk/review/7078/965024-09zkk-270x270.jpg",
    },
    {
      name: "Hammad Mustafa",
      date: "22 December 2024",
      comment:
        "Original product. Brand new and great experience with price.",
      rating: 5,
      image: "https://images.priceoye.pk/review/7908/1530725-ku80p-270x270.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold mb-3 ">Shop by Brand</h2>
        <div className="flex flex-wrap gap-6">
          {brands && brands.length > 0 ? (
            brands.map((brand, index) => (
              <div key={index} className="text-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-16 h-16 mx-auto"
                />
                <p className="mt-2">{brand.name}</p>
              </div>
            ))
          ) : (
            <p>No brands available</p>
          )}
        </div>

        <h2 className="text-2xl font-bold mt-12 text-center">Customer Reviews</h2>
        <p className="font-bold text-center mt-2 mb-3">What our Customers say about Priceoye.pk</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="p-6 border rounded bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
                    {review.name.split(" ")[0][0]}
                    {review.name.split(" ")[1]?.[0] || ""}
                  </div>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-xs">{review.date}</p>
                  </div>
                </div>
                <p className="text-sm">{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopByBrand;
