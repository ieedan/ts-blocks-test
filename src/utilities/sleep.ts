const sleep = async (durationMs: number): Promise<void> => new Promise((res) => setTimeout(res, durationMs));

export { sleep };
