type EnvKey = keyof ImportMetaEnv | string;

const getValue = (key: EnvKey): string => {
  const value = import.meta.env[key as keyof ImportMetaEnv];
  return typeof value === 'string' ? value : '';
};

export const requireEnv = (key: EnvKey): string => {
  const value = getValue(key);
  if (!value) {
    const message = `Missing required environment variable: ${String(key)}. Check your .env configuration.`;
    throw new Error(message);
  }
  return value;
};

export const optionalEnv = (key: EnvKey): string | undefined => {
  const value = getValue(key);
  return value || undefined;
};
