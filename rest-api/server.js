const express = require("express");
const app = express();

app.get("/api/listings", (req, res) => {
  res.json({
    theListings: mockDb.listings,
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const mockDb = {
  listings: [
    {
      image:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t45.5328-4/c1.0.524.524a/p526x395/271906977_4494665913978305_2380932549289905965_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=c48759&_nc_ohc=-dfq3JY-WhIAX8bv1EM&_nc_ht=scontent-lga3-2.xx&oh=00_AT8M2vj-mBEgK2X7STz4LVtAAm6bcpmljneq36fz2bPbLQ&oe=6204C9AF",
      name: "Mystery Box (Brand new Amazon products)",
      priceUsd: 20,
    },
    {
      image:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t45.5328-4/c0.87.526.526a/p526x395/271781853_4839780459431371_661432903861036810_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=c48759&_nc_ohc=YP5zAmjtlTcAX81THmw&_nc_ht=scontent-lga3-2.xx&oh=00_AT8dPLqrtO13Dc8j6BXlokx2rbjD1GZowP5vsUaqv2-RdQ&oe=6203F479",
      name: "Sony PlayStation 4 500GB",
      priceUsd: 150,
    },
    {
      image:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t45.5328-4/c0.204.526.526a/p526x395/273057252_5039662572743390_1383515602174247878_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=c48759&_nc_ohc=mHMLNxAOzjsAX8P5czr&_nc_ht=scontent-lga3-2.xx&oh=00_AT8NumHbXQCopuVkKwKGQbCSIZkO7GkrUMSsKc5xXu7viQ&oe=62044DDD",
      name: "Slim Wallet Money Clip",
      priceUsd: 8,
    },
  ],
};
