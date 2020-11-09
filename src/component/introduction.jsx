import React from 'react';

const Introduction = () => (
    <div>
        <div className="container">
            <h1 className="title">Introduction</h1>
            <ol className="text">
                <li>
                    {' '}
                    Conway’s Game of Life is a simple simulation that represents
                    individual cells as units. After an in-game moment passes,
                    the state of the game changes based on the previous state of
                    the world.
                </li>
                <li>
                    {' '}
                    A cell is defined as an individual location on the grid.
                    After a generation, a cell may change from living or dead
                    based on how many living or dead neighbors it had in a
                    previous iteration.
                </li>
                <li>
                    {' '}
                    A neighbor is defined as any immediately adjacent spot on
                    the grid (horizontal, vertical or diagonal).
                </li>
            </ol>
        </div>

        <div className="container">
            <h1 className="title">Basic Rules</h1>
            <ol className="text">
                <li>
                    {' '}
                    A living cell with less than two living neighbours dies
                </li>
                <li> A living cell with two or three live neighbours lives.</li>
                <li>
                    {' '}
                    A living cell with more than three live neighbours dies.
                </li>
                <li>
                    {' '}
                    A dead cell with exactly three live neighbours becomes a
                    live cell, as if by reproduction.
                </li>
            </ol>
        </div>

        <div className="container">
            <h1 className="title">Other specifications</h1>
            <ol className="text">
                <li>
                    In the home page, you can specify the number of rows and
                    columns of the grid. Rows and columns should be values
                    between 10-100. You can also set the frequency of the
                    simulation in the home page, which should be a value between
                    50-2000(ms). After you click on Go to the home page button,
                    you will be redirected to the home page.
                </li>
                <li>
                    By default, the number of rows is 10, and the number of
                    columns is 10; the frequency of the simulation is 1000ms.
                </li>
                <li>
                    By default, when you go to the game page, the game is set to
                    a paused status. You can start the game by clicking the
                    Simulation button, and pause the game by clicking the Pause
                    Simulation button.
                </li>
                <li>
                    You can also reset the simulation by clicking the Reset
                    Button. A new game will be rendered with a paused status.
                </li>
                <li>
                    When the grid is paused, you can click any cell and reverse
                    its state.
                </li>
                <li>
                    On top of the screen, the total number of current living
                    cells are displayed.
                </li>
                <li>
                    You can click on the Start using heatmap button to use
                    heatmap. This button can only be clicked when the game is
                    paused. It reflects how recently this cell is alive. If a
                    cell currently alive, it will be rendered as black; if a
                    cell was dead for ten or more simulations, it will be
                    rendered as white; otherwise it will be rendered from black
                    to white.
                </li>
            </ol>
        </div>
    </div>
);

export default Introduction;
