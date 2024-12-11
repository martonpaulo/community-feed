function parseText(text) {
  return text.split("\n").map(parseLine).map(concatTextFragments);
}

function parseLine(line) {
  return line.split(" ").map((fragment) => ({
    type: getFragmentType(fragment),
    value: fragment,
  }));
}

function getFragmentType(fragment) {
  if (fragment.startsWith("#")) return "hashtag";
  if (fragment.startsWith("@")) return "mention";
  if (isValidURL(fragment)) return "link";

  return "text";
}

function isValidURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

function concatTextFragments(fragments) {
  return fragments.reduce((acc, fragment) => {
    const lastFragment = acc[acc.length - 1];

    if (
      lastFragment &&
      lastFragment.type === "text" &&
      fragment.type === "text"
    ) {
      lastFragment.value += ` ${fragment.value}`;
    } else {
      acc.push(fragment);
    }

    return acc;
  }, []);
}

export { parseText };
