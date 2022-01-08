function menusController(Menu) {
  function post(req, res) {
    const menu = new Menu(req.body);
    if (!req.body.menuItems) {
      res.status(400);
      return res.send('Menu Items are required');
    }
    menu.save();
    res.status(201);
    return res.json(menu);
  }
  function get(req, res) {
    const query = {};
    if (req.query.fsq_id) {
      query.fsq_id = req.query.fsq_id;
    }
    Menu.find(query, (err, menus) => {
      if (err) {
        return res.send(err);
      }
      return res.json(menus);
    });
  }
  return { post, get };
}

module.exports = menusController;
