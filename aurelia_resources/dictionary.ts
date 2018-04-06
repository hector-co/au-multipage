export class Dictionary<TKey, TValue>{
  data: Array<{ key: TKey, value: TValue }>;

  constructor() {
    this.data = [];
  }

  public add(key: TKey, value: TValue) {
    if (this.data.find(d => d.key == key))
      throw 'Duplicated Key';
    this.data.push({ key: key, value: value });
  }

  public get(key: TKey): TValue {
    var item = this.data.find(d => d.key == key);
    if (!item)
      throw 'Key not found';
    return item.value;
  }

  public set(key: TKey, value: TValue) {
    var item = this.data.find(d => d.key == key);
    if (!item)
      throw 'Key not found';
    item.value = value;
  }

  public containsKey(key: TKey): boolean {
    return this.data.find(d => d.key == key) != null;
  }

  public keys(): Array<TKey> {
    return this.data.map(d => d.key);
  }

  public keyValues(): Array<{ key: TKey, value: TValue }> {
    return this.data;
  }
}