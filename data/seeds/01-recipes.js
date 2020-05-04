exports.seed = function (knex) {
  return knex("recipes").insert([
    {
      name: "Buffalo Chicken Dip",
      description:
        "This is the best buffalo chicken dip recipe! Whenever I bring it to a tailgate or potluck, everyone asks for the recipe. —Peggy Foster, Florence, Kentucky",
    },
    {
      name: "Mini Caramel Rolls",
      description:
        "Here's the perfect warm treat for pajama-clad family mornings. These ooey-gooey baked rolls come together in moments—thanks to a tube of refrigerated crescent rolls—and disappear just as quickly. —Kayla Wiegand, Congerville, Illinois",
    },
    {
      name: "Pepper Poppers",
      description:
        "These creamy stuffed jalapenos have some bite. They may be the most popular treats I make! My husband is always hinting that I should make a batch. —Lisa Byington, Johnson City, New York",
    },
    {
      name: "Sour Cream Chip Muffins",
      description:
        "Take one bite and you'll see why I think these rich, tender muffins are the best I've ever tasted. Mint chocolate chips make them a big hit with my family and friends. —Stephanie Moon, Boise, Idaho",
    },
    {
      name: "Onion Beef au Ju",
      description:
        "Garlic, onions, soy sauce and onion soup mix flavor the tender beef in these savory hot sandwiches served with a tasty, rich broth for dipping. The seasoned beef makes delicious cold sandwiches, too. —Marilyn Brown, West Union, Iowa",
    },
    {
      name: "Tasty-Italian Vegetable Soup",
      description:
        "Here's a dish that will warm you up fast. It takes just 25 minutes until you can sit down and start sipping on this soup. —Janet Frieman, Kenosha, Wisconsin",
    },
    {
      name: "Apple Dumpling Bake",
      description:
        "I received this recipe for baked apple dumplings with Mountain Dew from a friend of mine, then tweaked it to suit my family's tastes. The soda is definitely the secret ingredient in this rich apple dessert. —Chris Shields, Monrovia, Indiana",
    },
  ]);
};
