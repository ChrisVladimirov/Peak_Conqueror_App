import {render, screen, waitFor} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {EditPicturePage} from "./EditPicturePage";
import {pictureUrls} from "../../api/constants.js";
import {create} from 'react-test-renderer';

describe('EditPicturePage tests', function () {

    const testDTO = {
        'url': pictureUrls.FERDINANDOVO_EZERO,
        'title': 'Ferdinandovo ezero',
        'id': 1
    }

    test('Image should be displayed below the form', () => {
        const expected = <img src={testDTO.url} alt={testDTO.title}/>;

        const actual = render(<BrowserRouter>
            <EditPicturePage/>
        </BrowserRouter>);

        waitFor(() => {
            expect(screen.findAllByText(expected)).toBeTruthy()
        })
    })

    test('There must be exactly one image', () => {
        const expected = <img src={testDTO.url} alt={testDTO.title}/>;

        const element = create(expected);

        const actual = render(<BrowserRouter>
            <EditPicturePage/>
        </BrowserRouter>);

        waitFor(() => {
            expect(element.root.findAllByType(<img/>).length).toBe(1)
        })
    })
});