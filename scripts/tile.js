const NULL_TILE = -1;

class Tile{
  /**
   * @param {string} id
   * @param {string} name
   */
  constructor(id, name){
    this.name = name;
    this.id = id;
  }
}

class NaturalTile extends Tile{}

class BuildingTile extends Tile{}