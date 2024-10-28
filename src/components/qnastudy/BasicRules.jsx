import { useState } from 'react';
import { Box, Typography, Divider, useMediaQuery, Button, Modal  } from '@mui/material';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import SailingIcon from '@mui/icons-material/Sailing';
import InfoIcon from '@mui/icons-material/Info';
import boatPriority from '../../assets/sxima_prote.webp';
import marinesCodeSignal from '../../assets/marinecodesignals.webp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// eslint-disable-next-line react/prop-types
function BasicRules({selectedCategory}) {
    const isMobile = useMediaQuery('(max-width:600px)'); 
     // State for the modal open/close
    const [open, setOpen] = useState(false);

     // Function to handle opening and closing of the modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const BasicRulesContent = () => {
        const rulesContent = {
            0: {
                title: 'ΚΑΝΌΝΕΣ ΠΡΟΤΕΡΑΙΌΤΗΤΑΣ',
                content: (
                    <>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Κανόνες Προτεραιότητας</Typography>
                        <Typography variant="body2" sx={{ mb: 3 }}>
                            Ο διεθνής κανονισμός προς αποφυγή συγκρούσεων στη θάλασσα είναι σαφέστατος όσον αφορά την προτεραιότητα.
                        </Typography>
                        <Divider/>
                        <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold' }}>Γενικά</Typography>
                        <Typography variant="body2" sx={{ my: 2 }}>
                            <DirectionsBoatIcon sx={{fontSize:'1.2rem', color: 'info.main', mr: '2px' }} /> Το μηχανοκίνητο πλοίο δίνει πάντα προτεραιότητα σε:
                            <ul>
                                <li>Ιστιοφόρο (πλοίο που κινείται αποκλειστικά με πανιά)</li>
                                <li>Σκάφος ασχολούμενο με την αλιεία</li>
                                <li>Σκάφος περιορισμένης δυνατότητας χειρισμών</li>
                                <li>Ακυβέρνητο σκάφος</li>
                            </ul>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            <SailingIcon sx={{fontSize:'1.2rem', color: 'info.main', mr: '2px' }} />   Το ιστιοφόρο πλοίο δίνει πάντα προτεραιότητα σε:
                            <ul>
                                <li>Σκάφος ασχολούμενο με την αλιεία</li>
                                <li>Σκάφος περιορισμένης δυνατότητας χειρισμών</li>
                                <li>Ακυβέρνητο σκάφος</li>
                            </ul>
                        </Typography>

                        <Box sx={{ my: 2, width: '100%', height: isMobile ? 100 : 200, overflow: 'hidden' }}>
                            <img src={boatPriority} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>

                        <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold' }}>Σειρά Προτεραιότητας</Typography>
                        <Typography variant="body2" sx={{ mb: 3 }}>
                            Κάθε πλοίο πρέπει να απομακρύνεται από την πορεία αυτών που είναι από κάτω του.
                        </Typography>
                        <ul>
                            <li>Μηχανοκίνητο</li>
                            <li>Ιστιοφόρο</li>
                            <li>Ασχολούμενο με την αλιεία</li>
                            <li>Περιορισμένης ικανότητας χειρισμών</li>
                            <li>Ακυβέρνητο</li>
                        </ul>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                            <InfoIcon sx={{ fontSize: '1.5rem', color: 'info.main', mr: '8px' }} />
                            <Typography variant="body2">
                                Τα πολεμικά πλοία και τα σκάφη του Λιμενικού, όταν επιχειρούν, θεωρούνται πλοία περιορισμένης ικανότητας χειρισμών.
                            </Typography>
                        </Box>

                    </>
                ),
            },
            1: {
                title: 'Πριν από τον Απόπλου',
                content: (
                    <>
                        <Box sx={{ my: 2, px: 2, py: 3}}>
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center', color: 'primary.main' }}>
                                ΠΡΙΝ ΑΠΟ ΤΟΝ ΑΠΟΠΛΟΥ
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Ο χειριστής ταχυπλόου σκάφους πρέπει πριν από τον απόπλου:
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, listStyleType: 'none', color: 'text.secondary', lineHeight: 1.7 }}>
                                {[
                                    "Να ενημερωθεί για το δελτίο καιρού.",
                                    "Να ενημερώσει τους οικείους του για το σημείο προορισμού και για την πιθανή ώρα επιστροφής.",
                                    "Να εξετάσει την καλή λειτουργία της μηχανής τους σκάφους.",
                                    "Να έχει στο σκάφος τα υποχρεωτικά εφόδια.",
                                    "Να υπολογίσει την απόσταση που θα διανύσει και γνωρίζοντας την αυτονομία του σκάφους να έχει 50% επιπλέον καύσιμα.",
                                    "Να ελέγξει τους στεγανούς χώρους του σκάφους (εισροή υδάτων ή βρόχινα).",
                                    "Να ελέγξει ότι το σκάφος έχει τα απαραίτητα σωστικά μέσα, καπνογόνα, βεγγαλικά εν ισχύ ημερομηνία και καλή κατάσταση.",
                                    "Να ελέγξει τον πυροσβεστήρα του σκάφους (τύπου ξηράς κόνεως), στον οποίο πρέπει να γίνεται έλεγχος/επιθεώρηση ανά έτος καθώς και αντικατάσταση των κλείστρων και του περιεχομένου (αναγόμωση) ανά 4 έτη."
                                ].map((item, index) => (
                                    <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Typography variant="body2" sx={{ color: 'primary.main', mr: 1 }}>
                                            •
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'primary.main' }}>{item}</Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Divider/>
                            <Typography variant="body2" sx={{ mt: 2, mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
                            Απαραίτητος Εξοπλισμός Σκάφους
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, listStyleType: 'none', color: 'text.secondary', lineHeight: 1.7 }}>
                                {[
                                    { item: "Σωσίβια", explanation: "Απαραίτητα για κάθε επιβάτη σε περίπτωση ανάγκης", indept:"Συγκεκριμένα θέλει ο επιτρεπόμενος αριθμός των επιβαινόντων συν 10% & Κυκλικό σωσίβιο." },
                                    { item: "Πυροσβεστήρας", explanation: "Για την άμεση αντιμετώπιση πυρκαγιών." },
                                    { item: "Βεγγαλικά", explanation: "Για την ειδοποίηση σε περίπτωση έκτακτης ανάγκης.", indept:"1 σετ με 3 Βεγγαλικά & 1 καπνογόνο." },
                                    { item: "Φαρμακείο", explanation: "Για την παροχή πρώτων βοηθειών σε περίπτωση τραυματισμού." },
                                    { item: "Σχοινιά και άγκυρα", explanation: "Για ασφαλές δέσιμο ή ακινητοποίηση του σκάφους όταν χρειάζεται." },
                                    { item: "Ανταλλακτικά και εργαλεία", explanation: "Για την επιδιόρθωση μικροβλαβών στο σκάφος." },
                                    { item: "Κουπιά", explanation: "Τα κουπιά είναι απαραίτητα για τη χειροκίνητη προώθηση του σκάφους, ειδικά σε περιπτώσεις που το σκάφος έχει μηχανική βλάβη ή σε ρηχά νερά όπου η χρήση της μηχανής μπορεί να μην είναι εφικτή." },
                                    { item: "Φακός", explanation: "Ο φακός είναι σημαντικός για τη νυχτερινή πλοήγηση ή σε περιπτώσεις έκτακτης ανάγκης. Εξασφαλίζει ότι μπορείτε να δείτε και να δείξετε τον εαυτό σας σε άλλους κατά τη διάρκεια της νύχτας ή σε κακές καιρικές συνθήκες." },
                                    { item: "Ραδιόφωνο", explanation: "Ένα ραδιόφωνο (τρανζίστορ) είναι απαραίτητο για την ενημέρωση σχετικά με τις καιρικές συνθήκες και για επικοινωνία σε περίπτωση έκτακτης ανάγκης. Σημαντική είναι η δυνατότητα λήψης SOS και άλλων καναλιών έκτακτης ανάγκης." },
                                    { item: "Φανός θυέλλης", explanation: "Ο φανός θυέλλης είναι απαραίτητος για την ασφαλή πλοήγηση κατά τη διάρκεια καταιγίδων ή σε άλλες επικίνδυνες καταστάσεις. Προσφέρει ορατότητα και σας βοηθά να εντοπίσετε το σκάφος σας ή να ζητήσετε βοήθεια." },
                                    { item: "Κουβάς", explanation: "Ο κουβάς είναι χρήσιμος για την απομάκρυνση νερού από το σκάφος, προκειμένου να διατηρηθεί η ασφάλεια και η σταθερότητά του. Είναι κρίσιμο σε περιπτώσεις εισροής νερού." }
                                ].map((equip, index) => (
                                    <Box component="li" key={index} sx={{ mb: 1 }}>
                                        <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                                            {equip.item}:
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'primary.main', ml: 2 }}>
                                            {equip.explanation}
                                            {equip.indept && (
                                                <Typography variant="body2" sx={{ display:'flex', alignItems:'center' }}>
                                                    <ArrowRightIcon sx={{ color: 'info.main', mr: '2px' }} />
                                                    {equip.indept}
                                                </Typography>
                                            )}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </>
                ),
            },
            2: {
                title: 'Σε Λιμάνι',
                content: (
                    <>
                        <Typography variant="h6">Σε Λιμάνι</Typography>
                        <Divider sx={{ my:2 }} />
                        <Typography variant="body2" sx={{ display:'flex', alignItems:'center' }}>
                            <ArrowRightIcon sx={{ color: 'info.main', mr: '2px' }} />
                            Ο χειριστής ταχυπλόου σκάφους κατά την είσοδο -
                            έξοδο των λιμένων πρέπει να πλέει πάντα στη δεξιά
                            τους πλευρά και με ταχύτητα μικρότερη των 5 κόμβων.
                        </Typography>
                        <Typography variant="body2" sx={{ display:'flex', alignItems:'center' }}>
                            <ArrowRightIcon sx={{ color: 'info.main', mr: '2px' }} />
                            Ο χειριστής ταχυπλόου σκάφους πρέπει να πλέει πάντα
                            15 μέτρα μακριά από φυσικά ή τεχνητά εμπόδια.
                        </Typography>
                        <Typography variant="body2" sx={{ display:'flex', alignItems:'center' }}>
                            <ArrowRightIcon sx={{ color: 'info.main', mr: '2px' }} />
                            Προτεραιότητα έχει αυτός ο οποίος εξέρχεται από το
                            λιμάνι, διότι έχει περιορισμένη ικανότητα σε χειρισμούς και ελιγμούς.
                        </Typography>
                        <Box >
                            <Typography variant="body3" sx={{ my: 2, display:'flex', alignItems:'start', fontStyle:'bold'}}>
                                <ArrowRightIcon sx={{fontSize:'1.2rem', color: 'info.main', mr: '2px' }} /> Απαγορεύεται:
                            </Typography>
                            <ul>
                                <li>Ο πλους των Jet Ski σε ώρες κοινής ησυχίας στις κατοικημένες περιοχές
                                από μήνα Μάιο έως Σεπτέμβριο.</li>
                                <li>Ο πλους των Jet Ski κατά τη νύχτα, διότι δεν έχουν φανούς ναυσιπλοΐας.</li>
                                <li>Ο πλους όλων των σκαφών σε απόσταση μικρότερη των 150 m από
                                σημαδούρα ψαροντουφεκά ή δύτη.</li>
                            </ul>
                        </Box>
                    </>
                ),
            },
            3: {
                title: 'Κατά τον Πλου',
                content: (
                    <>
                        <Typography variant="h6">Κατά τον Πλου</Typography>
                        <Box sx={{ my: 2, px: 2, py: 3 }}>
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center', color: 'primary.main' }}>
                                Σε περίπτωση Βλάβης της Μηχανής
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Σε περίπτωση βλάβης της μηχανής κατά τον πλου και εφόσον η ζημιά είναι επισκευάσιμη, πρέπει να γίνεται χρήση πλωτής ή κλασικής άγκυρας. Εάν η βλάβη δεν είναι επισκευάσιμη, πρέπει όλοι οι επιβάτες του σκάφους να φορέσουν σωσίβια σε δύσκολες καιρικές συνθήκες και στη συνέχεια ο χειριστής του σκάφους να επικοινωνήσει με τις Λιμενικές Αρχές και εφόσον διαθέτει VHF με το ΕΛΛΑΣ ΡΑΔΙΟ στο κανάλι 16.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Στις Λιμενικές Αρχές ή στο ΕΛΛΑΣ ΡΑΔΙΟ πρέπει να αναφερθούν:
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, listStyleType: 'none', color: 'text.secondary', lineHeight: 1.7 }}>
                                {[
                                    "Τα στοιχεία του σκάφους",
                                    "Τα στοιχεία του χειριστή του σκάφους",
                                    "Ο αριθμός των επιβαινόντων στο σκάφος",
                                    "Το είδος του κινδύνου",
                                    "Το στίγμα (θέση) του σκάφους",
                                    "Οι προθέσεις του χειριστή (π.χ. αν σκοπεύει να εγκαταλείψει το σκάφος κ.λπ.)"
                                ].map((item, index) => (
                                    <Box component="li" key={index} sx={{ color: 'primary.main', lineHeight: 1.7 }}>
                                        {index+1}. {item}
                                    </Box>
                                ))}
                            </Box>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Σε περίπτωση που δεν υπάρχει κινητό ή VHF πάνω στο σκάφος, χρησιμοποιούμε φωτιστικά σήματα ημέρας ή νύχτας (καπνογόνα, βεγγαλικά) εφόσον είναι ευδιάκριτα σε τρίτους.
                            </Typography>
                        </Box>
                    </>
                ),
            },
            4: {
                title: 'Διεθνής Ναυτικός Κώδικας',
                content: (
                    <>
                        <Typography variant="h6">Διεθνής Ναυτικός Κώδικας</Typography>
                        <Box sx={{ my: 2, width: '100%', overflow: 'hidden' }}>
                            <img
                                src={marinesCodeSignal}
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                            {/* Zoom Button */}
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleOpen}
                                sx={{ mt: 2 }}
                            >
                                Preview Signals
                            </Button>
                        </Box>

                        {/* Modal for zoomed image */}
                        <Modal
                            open={open}
                            onClose={handleClose}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    boxShadow: 24,
                                    p: 4,
                                    maxWidth: '90%',
                                    maxHeight: '90%',
                                }}
                            >
                                <img
                                    src={marinesCodeSignal}
                                    alt="Zoomed"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Box>
                        </Modal>
                    </>
                ),
            },
        };

        return (
            <Box sx={{ padding: 3 }}>
                {rulesContent[selectedCategory]?.content || <Typography>Content not available</Typography>}
            </Box>
        );
    };

    return (
        <Box sx={{ display: 'flex', height: '100%', flexDirection:'column'}}>
            <Box sx={{ flex: 1, padding: isMobile ? 0 : 3 }}>
                <BasicRulesContent />
            </Box>
        </Box>
    );
}

export default BasicRules;
