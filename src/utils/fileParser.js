export const parseFile = (file) => {
  return new Promise((resolve, reject) => {
    fileToText(file).then(text => {
      const result = JSON.parse(text);
      resolve({
        result: result
      });
    });
  });
};

const fileToText = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      resolve(e.target.result);
    };
  });
}
