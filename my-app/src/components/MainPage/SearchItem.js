import React from 'react';
export default class SearchItem extends React.Component {
    render() {
        return (
          <div className="w3_agile_search">
            <form action="#" method="post">
              <input type="search" name="Search" placeholder="Search Keywords..." required="" />
              <input type="submit" value="Search" />
            </form>

          </div>

        );
      }
    }
