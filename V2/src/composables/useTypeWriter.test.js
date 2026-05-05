import { describe, it, expect, vi } from "vitest";
import { useTypewriter } from "./useTypeWriter.js";

describe('useTypeWriter', () => {
  it('starts with an empty string', () => {
    const { texteAffiche } = useTypewriter(['Bonjour'])
    expect(texteAffiche.value).toBe('')
  })
  it('the function is working for a letter', () => {
    vi.useFakeTimers();
     const { texteAffiche } = useTypewriter(['Bonjour'])
    vi.advanceTimersByTime(100)
    expect(texteAffiche.value).toBe('B')
    vi.useRealTimers()
  })
  it('the function is working for the words', () => {
    vi.useFakeTimers();
     const { texteAffiche } = useTypewriter(['Bonjour'])
    vi.advanceTimersByTime(700)
    expect(texteAffiche.value).toBe('Bonjour')
    vi.useRealTimers()
  })
})