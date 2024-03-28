const imgChangeJS = document.getElementById("img-change");

const buttonJS = document.querySelectorAll(".button-id").forEach(a => {
  a.addEventListener('click', event => {
    if (a.innerHTML === "Why Bees Matter") {
      imgChangeJS.src = "Photos/2022_720x480headers_0006_small_bee-honeycomb.jpg";
    } else if (a.innerHTML === "Threats to Bees") {
      imgChangeJS.src = "Photos/Threats-to-Bees-2.png";
    } else if (a.innerHTML === "How You Can Help") {
      imgChangeJS.src = "Photos/How-you-can.png";
    } else if (a.innerHTML === "Get Involved") {
      imgChangeJS.src = "Photos/shutterstock_1054817495.jpg";
    }
  })
})

const pChangeJS = document.getElementById("p-change");

const buttonJS1 = document.querySelectorAll(".button-id").forEach(a => {
  a.addEventListener('click', event => {
    console.log(a.innerHTML);
    if (a.innerHTML === "Why Bees Matter") {
      pChangeJS.innerHTML = "Imagine a grey world without almonds, apples, or fragrant flowers… Sounds terrible, right? Unfortunately, that’s the shocking future we face if we don’t work to help our most precious pollinator: bees. Far from being a niche concern, bees lie at the heart of our survival – and they have been dying at unprecedented rates. Their hard work is not only essential to healthy ecosystems, but to sustaining animal and human life too. Each year, bees are experiencing massive die-offs throughout the U.S. and Canada. In 2017, the rusty patched bumblebee was the first bee added to the endangered species list in the continental U.S. A 2019 survey from the Bee Informed Partnership states that nearly 40% of U.S. beekeepers lost their colonies during the previous year. Compared to 1947, the U.S. honeybee population has declined by 60%. Bees pollinate one-third of the food we eat. From apples and squash to buckwheat and coffee, bees are responsible for pollinating most of the fruits, vegetables, seeds, and nuts that are essential to our diets. Honeybees in particular play a huge role in agriculture, contributing over $15 billion to the value of US crop production.";
    } else if (a.innerHTML === "Threats to Bees") {
      pChangeJS.innerHTML = "When we talk about conserving pollinators, like other animals, they mostly need food and shelter. With insect pollinators, the larvae of many species have a very narrow range of foods (plants) they can eat—like the monarch butterfly larvae (caterpillars) and milkweeds. And whether it’s birds, bats, or insects, all pollinators need appropriate nesting sites whether they're located on the ground or in a cavity, like a tree. Migratory pollinators also require overwintering sites. However, for the past 25 years, many species of bees and other pollinators have experienced large drops in numbers. Here, we explore the primary threats to pollinators across North America.Habitat that pollinators need in order to survive are shrinking. As native vegetation is replaced by roadways, manicured lawns, crops and non-native gardens, pollinators lose the food and nesting sites that are necessary for their survival. Remaining patches of prairie and meadow have become more disconnected. That makes it harder for pollinators to reach new breeding sites or find better habitat. Migratory pollinators face special challenges. If the distance between the suitable habitat patches along their migration route is too great, smaller, weaker individuals may die during their journey. Invasive plants crowd out native ones, reducing food and shelter for pollinators. Disease-causing organisms— including viruses, fungi and bacteria — can spread from non-native to native pollinators. Other stressors, such as poor nutrition and pesticide exposure, may intensify the effect of diseases. While pesticides can help control crop pests and  invasive species , improper use can harm pollinators and other wildlife. Use pesticides only when necessary. Use the minimum amount required to be effective and target the application so that only the intended pest is affected. Flowers are blooming earlier as temperatures warm, costing some pollinators the opportunity to feed. Some insects feed only on specific plants; if these blooms die before insects arrive, the insects go hungry and fewer plants get pollinated. Rising temperatures may be contributing to a decline in bumblebees. Numbers of North American bumblebees have fallen nearly 50 percent since 1974. The biggest losses have occurred in places where temperatures have risen the highest. Other climate change effects like more flooding, shorter fire cycles and the spread of invasive species threaten native habitats.";
    } else if (a.innerHTML === "How You Can Help") {
      pChangeJS.innerHTML = "Plant a range of flowers in your garden so bees have access to nectar from March to October. You can use the winter season to plan a garden full of nectar-rich plants that bees can forage come spring. Bees love traditional cottage garden flowers and native wildflowers, like primrose, buddleia, and marigolds. A tired bee really does like a tiny hit of sugar (never honey!) Mix two teaspoons of white granulated sugar with one teaspoon of water and put it on a plate or drip it on a flower, to revive a tired bee. Is honey good or bad for bees? When done right, bee farming can be beneficial for wild populations and still allow you to enjoy honey. Did you know there are around 200 species of solitary bees in the UK? Get to know the bees in your garden and in the green spaces around you by downloading our bee identification chart - see how many you can spot!";
    } else if (a.innerHTML === "Get Involved") {
      pChangeJS.innerHTML = "Operating along the front lines of honey bee health, beekeepers and other bee health stakeholders can arm themselves with knowledge and tools to better protect their hives. The Honey Bee Health Coalition engages these stakeholders and provides the critically important tools to spread best management practices and ultimately improving honey bee health.";
    }
  })
})

const headingChangeJS = document.getElementById("h-change");

const buttonJS2 = document.querySelectorAll(".button-id").forEach(a => {
  a.addEventListener('click', event => {
    console.log(a.innerHTML);
    if (a.innerHTML === "Why Bees Matter") {
      headingChangeJS.innerHTML = "Why Bees Matter";
    } else if (a.innerHTML === "Threats to Bees") {
      headingChangeJS.innerHTML = "Threats to Bees";
    } else if (a.innerHTML === "How You Can Help") {
      headingChangeJS.innerHTML = "How You Can Help";
    } else if (a.innerHTML === "Get Involved") {
      headingChangeJS.innerHTML = "Get Involved";
    }
  })
})

function buttonJS3() {
  headingChangeJS.innerHTML = "Fun Bee Fact";
  pChangeJS.innerHTML = "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little. Special day, graduation. Never thought I'd make it. Three days grade school, three days high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around the hive. You did come back different. - Hi, Barry. - Artie, growing a mustache? Looks good. - Hear about Frankie? - Yeah. - You going to the funeral? - No, I'm not going.";
}