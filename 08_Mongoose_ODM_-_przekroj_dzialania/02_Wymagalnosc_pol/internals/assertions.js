import mongoose from 'mongoose';

export const runAssertions = async (schema) => {
  console.assert(schema, 'Should be defined', schema);

  const App = new mongoose.model('App', schema);

  const appWithoutVersion = new App({
    shouldUpdate: true,
    size: 230,
    installationLocation: 'C:/Program Files/',
    lastChecked: new Date().setDate(new Date().getDate() - 10),
  });

  let err;
  try {
    await appWithoutVersion.validate();
  } catch (error) {
    err = error;
  }
  console.assert(err && err.message ===
    'App validation failed: version: Path `version` is required.',
    'Should require version', err. message);
  err = null;

  const appWithoutLastChecked = new App({
    version: '212.3',
    shouldUpdate: true,
    size: 230,
    installationLocation: 'C:/Program Files/'
  });

  try {
    await appWithoutLastChecked.validate();
  } catch (error) {
    err = error;
  }
  console.assert(err && err.message ===
    'App validation failed: lastChecked: Path `lastChecked` is required.',
    'Should require lastChecked', err && err.message);
  err = null;

  const appWithImproperDate = new App({
    version: '212.3',
    shouldUpdate: true,
    size: 230,
    installationLocation: 'C:/Program Files/',
    lastChecked: 'notadate'
  });

  try {
    await appWithImproperDate.validate();
  } catch (error) {
    err = error;
  }
  console.assert(err && err.message ===
    'App validation failed: lastChecked: Cast to Number failed for value "notadate" at path "lastChecked"',
    'Should fail at lastChecked type', err && err.message);
};
