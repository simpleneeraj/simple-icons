// Another Class

const setValue = async (text: any) => {
  try {
    await self.navigator.clipboard.writeText(text);
  } catch (e) {
    console.error(e);
  }
};
const readValue = (): any => {
  try {
    const data = self.navigator.clipboard.readText();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { setValue, readValue };
