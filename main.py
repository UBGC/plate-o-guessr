import pygame
import random
import sys

pygame.init()

SCREEN_WIDTH, SCREEN_HEIGHT = 800, 600
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("PLATE-O-GUESSER")

font_large = pygame.font.SysFont("Arial", 72)
font_medium = pygame.font.SysFont("Arial", 36)

WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GRAY = (200, 200, 200)
GREEN = (0, 200, 0)
RED = (200, 0, 0)

# wczytanie obrazu tablicy (plik .png z Eurobandem)
plate_img = pygame.image.load("euroband_white.jpg")
plate_img = pygame.transform.scale(plate_img, (400, 120))  # dopasuj rozmiar do gry

plates = {
    "PO": "Poznań",
    "KR": "Kraków",
    "WA": "Warszawa",
    "GD": "Gdańsk",
    "LU": "Lublin",
    "SK": "Katowice",
    "BI": "Białystok",
    "NO": "Olsztyn",
    "DW": "Wrocław",
    "ZS": "Szczecin",
    "EL": "Łódź",
    "RZ": "Rzeszów",
    "OP": "Opole",
    "TK":"Kielce",
    "CT":"Toruń",
    "FZ":"Zielona Góra",
    "SG":"Gliwice",
    "TSA":"Sandomierz",
    "GCH":"Chojnice",
    "ZSL":"Sławno",
    "NOS":"Ostróda",
    "BS":"Suwałki",
    "FG":"Gorzów Wielkopolski",
    "PGN":"Gniezno",
    "CB":"Bydgoszcz",
    "WR":"Radom",
    "EP":"Piotrków Trybunalski",
    "LKS":"Krasnystaw",
    "DB":"Wałbrzych",
    "OGL":"Głuchołazy",
    "KT":"Tarnów",
    "RP":"Przemyśl",
    "ZSW":"Świnoujście",
    "NE":"Elbląg",
    "BL":"Łomża",
    "ZSW":"Świnoujście",
    "GA":"Gdynia",
    "NBR":"Braniewo",
    "BL":"Łomża",
    "FMI":"Międzyrzecz",
    "POS":"Ostrów Wielkopolski",
    "CG":"Grudziądz",
    "WP":"Płock",
    "LZ":"Zamość",
    "ES":"Skierniewice",
    "DL":"Legnica",
    "OOL":"Olesno",
    "SCI":"Cieszyn",
    "KCH":"Chrzanów",
    "RT":"Tarnobrzeg",
}

cities = list(set(plates.values()))

def generate_plate():
    prefix = random.choice(list(plates.keys()))
    number = ''.join(random.choices("0123456789ACEFGHJKLMNPQRSTUVWXY", k=5))
    return f"{prefix} {number}", plates[prefix]

class TextInputBox:
    def __init__(self, x, y, w, h, font, color_active, color_inactive):
        self.rect = pygame.Rect(x, y, w, h)
        self.color_active = color_active
        self.color_inactive = color_inactive
        self.color = self.color_inactive
        self.text = ''
        self.font = font
        self.txt_surface = self.font.render(self.text, True, self.color)
        self.active = False

    def handle_event(self, event):
        if event.type == pygame.MOUSEBUTTONDOWN:
            self.active = self.rect.collidepoint(event.pos)
            self.color = self.color_active if self.active else self.color_inactive
        elif event.type == pygame.KEYDOWN:
            if self.active:
                if event.key == pygame.K_RETURN:
                    return self.text
                elif event.key == pygame.K_BACKSPACE:
                    self.text = self.text[:-1]
                else:
                    self.text += event.unicode
                self.txt_surface = self.font.render(self.text, True, self.color)
        return None

    def draw(self, screen):
        screen.blit(self.txt_surface, (self.rect.x + 5, self.rect.y + 5))
        pygame.draw.rect(screen, self.color, self.rect, 2)
        
def choose_rounds():
    input_box = TextInputBox(SCREEN_WIDTH // 2 - 150, SCREEN_HEIGHT // 2, 300, 50,
                             font_medium, pygame.Color('dodgerblue2'), pygame.Color('gray'))
    prompt_text = font_medium.render("Podaj liczbę rund i naciśnij Enter:", True, BLACK)

    while True:
        screen.fill(WHITE)
        screen.blit(prompt_text, (SCREEN_WIDTH // 2 - prompt_text.get_width() // 2,
                                  SCREEN_HEIGHT // 2 - 100))
        input_box.draw(screen)
        pygame.display.flip()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            result = input_box.handle_event(event)
            if result is not None:
                try:
                    rounds = int(result)
                    if rounds > 0:
                        return rounds
                except ValueError:
                    pass  # ignorujemy błędne wartości        

def game_loop(max_rounds):
    score = 0
    round_number = 0

    running = True
    current_plate, correct_city = generate_plate()
    input_box = TextInputBox(SCREEN_WIDTH // 2 - 150, 300, 300, 50, font_medium,
                             pygame.Color('dodgerblue2'), pygame.Color('gray'))

    feedback = ""
    show_feedback = False
    feedback_timer = 0

    while running:
        screen.fill(WHITE)

        # wyświetlenie obrazka tablicy na środku
        plate_rect = plate_img.get_rect(center=(SCREEN_WIDTH // 2, 150))
        screen.blit(plate_img, plate_rect)

        # napis na środku tablicy
        plate_text = font_large.render(current_plate, True, BLACK)
        screen.blit(plate_text, (plate_rect.centerx - plate_text.get_width() // 2, plate_rect.centery - plate_text.get_height() // 2))


        score_text = font_medium.render(f"Wynik: {score}/{round_number}", True, BLACK)
        screen.blit(score_text, (10, 10))

        if not show_feedback:
            input_box.draw(screen)

        if show_feedback:
            feedback_text = font_medium.render(feedback, True, GREEN if "Brawo" in feedback else RED)
            screen.blit(feedback_text, (SCREEN_WIDTH // 2 - feedback_text.get_width() // 2, 500))

        pygame.display.flip()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

            result = input_box.handle_event(event)
            if result is not None:
                round_number += 1
                if result.strip().lower() == correct_city.lower():
                    score += 1
                    feedback = "Brawo! To było poprawne."
                else:
                    feedback = f"Zła odpowiedź! To było: {correct_city}."
                show_feedback = True
                feedback_timer = pygame.time.get_ticks()
                input_box.text = ''
                input_box.txt_surface = input_box.font.render(input_box.text, True, input_box.color)

        if show_feedback and pygame.time.get_ticks() - feedback_timer > 2000:
            if round_number >= max_rounds:
                running = False
            else:
                current_plate, correct_city = generate_plate()
                show_feedback = False
                
    screen.fill(WHITE)
    final_text = font_large.render(f"Koniec! Twój wynik: {score}/{max_rounds}", True, BLACK)
    screen.blit(final_text, (SCREEN_WIDTH // 2 - final_text.get_width() // 2, SCREEN_HEIGHT // 2 - 50))
    pygame.display.flip()
    pygame.time.wait(4000)
    pygame.quit()

    screen.fill(WHITE)
    final_text = font_large.render(f"Koniec! Twój wynik: {score}/{max_rounds}", True, BLACK)
    screen.blit(final_text, (SCREEN_WIDTH // 2 - final_text.get_width() // 2, SCREEN_HEIGHT // 2 - 50))
    pygame.display.flip()
    pygame.time.wait(4000)
    pygame.quit()

# najpierw wybór rund, potem gra
rounds = choose_rounds()
game_loop(rounds)
