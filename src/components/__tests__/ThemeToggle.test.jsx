import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import ThemeToggle from '../ThemeToggle';
import { ThemeContext } from '../../theme/ThemeContext';

function Wrapper({ children }) {
  const [mode, setMode] = useState('light');
  const toggleTheme = () => setMode(prev => prev === 'light' ? 'dark' : 'light');
  Wrapper.mode = mode;
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function setup() {
  render(<ThemeToggle />, { wrapper: Wrapper });
  return { getMode: () => Wrapper.mode };
}

test('toggles theme mode and icon', async () => {
  const user = userEvent.setup();
  const { getMode } = setup();

  expect(getMode()).toBe('light');
  expect(screen.getByTestId('DarkModeIcon')).toBeTruthy();

  await user.click(screen.getByRole('button'));

  expect(getMode()).toBe('dark');
  expect(screen.getByTestId('LightModeIcon')).toBeTruthy();
});
