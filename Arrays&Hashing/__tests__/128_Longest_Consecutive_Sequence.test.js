import { describe, expect, test } from "@jest/globals";
import { longestConsecutive } from "../128_Longest_Consecutive_Sequence";

describe("longestConsecutive should work properly", () => {
  test("checks the first case", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toEqual(4);
  });

  test("checks the second case", () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9);
  });

  test("checks the case with empty nums", () => {
    expect(longestConsecutive([])).toEqual(0);
  });

  test("checks the case with 1 element in nums", () => {
    expect(longestConsecutive([0])).toEqual(1);
  });

  test("checks the case with really long nums", () => {
    expect(
      longestConsecutive([
        62670, 50689, 74016, 89663, 88676, 8656, 45810, 78903, 42372, 7450,
        84540, 10203, 11186, 26242, 60948, 6001, 88298, 35259, 47767, 74702,
        35450, 26739, 6812, 46776, 4465, 4675, 80985, 50761, 9572, 61561, 20897,
        97997, 43424, 30642, 96130, 10658, 84610, 23353, 56681, 81749, 7600,
        583, 61054, 73098, 66965, 6289, 74894, 45016, 96813, 76117, 68417,
        38287, 13721, 16441, 30943, 49406, 9086, 3137, 95059, 80549, 82789,
        58583, 18462, 17612, 95763, 35597, 9785, 17429, 12329, 55930, 34757,
        38921, 46069, 78475, 14699, 22660, 35329, 80296, 27841, 65278, 4009,
        63931, 20550, 36593, 12633, 15756, 39716, 71561, 34398, 66712, 89399,
        68359, 48733, 86288, 68348, 56547, 44245, 36714, 17300, 51453, 13046,
        74536, 64640, 99869, 39634, 26027, 54955, 91319, 56093, 31613, 43743,
        95877, 10211, 29388, 35657, 92542, 34894, 30911, 16768, 2634, 7793,
        80906, 21041, 32861, 22284, 16161, 23619, 17492, 4383, 34103, 55668,
        62086, 3355, 71041, 1188, 10824, 98761, 78288, 45260, 18343, 49499,
        73947, 90254, 6116, 79622, 74452, 83698, 19951, 35025, 254, 4370, 23516,
        53234, 9351, 71931, 79291, 7585, 33119, 86414, 48453, 5, 73340, 13457,
        61877, 97556, 79733, 51457, 97792, 90955, 32759, 25492, 61398, 3111,
        18086, 23019, 86695, 66839, 93669, 60730, 67595, 54405, 73609, 54108,
        97494, 31558, 59518, 45557, 43030, 54257, 90442, 33355, 44183, 44176,
        15054, 5399, 66026, 43371, 53637, 39667, 32092, 2984, 67633, 94180,
        4113, 41254, 51933, 59232, 83261, 94322, 24059, 73760, 21320, 71472,
        80269, 7028, 29228, 86578, 51182, 94035, 30125, 63707, 99937, 38500,
        93335, 36527, 20862, 39229, 18252, 79007, 46613, 51799, 64375, 38755,
        46220, 90152, 66013, 78164, 30824, 43236, 71432, 1083, 73725, 95168,
        36074, 72693, 86065, 86025, 71464, 71917, 46504, 60884, 49045, 29138,
        75264, 77874, 6769, 28500, 72119, 84515, 20568, 83270, 66578, 59599,
        55088, 44141, 85114, 18565, 86896, 19903, 27658, 94582, 85805, 39426,
        59858, 17497, 43216, 12808, 88165, 85410, 5993, 97924, 1727, 38142,
        53245, 75289, 26797, 42140, 43811, 20678, 81050, 20331, 19254, 2194,
        93123, 78593, 29501, 10827, 39407, 88507, 68721, 72171, 15770, 62154,
        76002, 26042, 90905, 5413, 29142, 62394, 11158, 99331, 59328, 17344,
        72449, 31806, 97125, 51250, 75489, 31070, 5884, 64407, 80496, 6754,
        47644, 51694, 29998, 91693, 24224, 97902, 47926, 9119, 21865, 44927,
        78967, 15088, 34642, 89081, 98254, 79534, 85342, 82802, 91848, 41724,
        2608, 18789, 63111, 5201, 65401, 93157, 59694, 11583, 1715, 15548,
        35793, 78371, 37827, 78414, 68333, 22864, 29925, 89873, 95746, 69109,
        72772, 63103, 18089, 92492, 47606, 18656, 91216, 82552, 8635, 5403,
        62888, 67097, 4299, 6299, 54934, 79890, 14231, 96526, 24012, 31441,
        47396, 98041, 20539, 6244, 39395, 20027, 58902, 6596, 26448, 3239,
        33261, 64545, 96244, 75101, 82962, 80896, 92202, 65783, 57906, 80582,
        38624, 22844, 59611, 37277, 51980, 36033, 94514, 34695, 85, 53934,
        89343, 18381, 48842, 13225, 52527, 35992, 44110, 17459, 63837, 80449,
        21324, 46080, 8159, 95079, 49207, 32772, 46039, 1913, 24407, 24413,
        38198, 3775, 28059, 32869, 81783, 66249, 15080, 96846, 10609, 65416,
        85930, 21647, 45364, 26254, 44457, 82638, 51444, 79716, 11394, 9577,
        20999, 51807, 5967, 25583, 83503, 13444, 71935, 57920, 58767, 42503,
        45546, 48215, 90169, 72654, 37415, 42752, 35486, 45392, 120, 96406,
        23004, 51164, 51294, 45632, 12563, 88857, 51682, 51525, 99122, 76043,
        96747, 38816, 85840, 79748, 42944, 38828, 62659, 90237, 86421, 84965,
        62077, 19902, 6645, 36314, 2453, 48345, 43497, 23455, 54543, 83947,
        47733, 74414, 62014, 19449, 51497, 58480, 30127, 94246, 99610, 83914,
        8244, 47882, 6685, 46280, 87235, 47098, 40876, 40481, 62879, 54506,
        79837, 90590, 94320, 33114, 92461, 35076, 90839, 5327, 87042, 66611,
        29302, 22171, 31373, 76137, 5816, 78444, 16910, 84598, 92630, 19719,
        87631, 57106, 60832, 47253, 46344, 83279, 21275, 66336, 98700, 85598,
        21402, 79355, 42389, 35817, 18851, 35953, 46547, 85660, 75414, 16548,
        92276, 49380, 32855, 73212, 86193, 41621, 38965, 40618, 46974, 28581,
        54699, 14063, 92174, 19936, 94819, 15076, 49169, 7998, 93771, 37858,
        19507, 94031, 15241, 90761, 87605, 87080, 46573, 68830, 2202, 42573,
        22898, 86304, 57923, 11520, 20191, 99882, 73210, 89219, 33541, 34921,
        90345, 77015, 21071, 41917, 82317, 45123, 23475, 62457, 59152, 65963,
        26418, 75127, 23129, 4288, 63485, 20688, 43768, 26622, 57581, 53950,
        80253, 83193, 90156, 83840, 46448, 71590, 92144, 65043, 78265, 67088,
        65115, 7232, 82607, 27500, 16024, 78733, 50137, 1506, 24163, 92322,
        89182, 94792, 74849, 58113, 29680, 11476, 53922, 84859, 72832, 10227,
        28140, 67440, 21195, 85487, 73852, 15671, 12223, 16243, 63786, 99157,
        10764, 97062, 4967, 72769, 87966, 51246, 75321, 92902, 87051, 15204,
        34631, 50192, 39454, 41355, 52266, 64668, 17145, 22430, 76710, 97657,
        77394, 22047, 13598, 73647, 48053, 41691, 79491, 77679, 49695, 51913,
        39980, 73971, 95963, 78134, 15737, 88911, 76351, 70921, 65010, 39150,
        33181, 44538, 16053, 52991, 75086, 70991, 10699, 76153, 62389, 20506,
        36323, 59001, 69301, 79789, 50461, 77821, 24763, 22503, 16051, 62435,
        82112, 39594, 99821, 44007, 99082, 56542, 2503, 61182, 91000, 4196,
        75893, 98933, 4952, 14294, 12360, 51907, 1766, 47116, 58541, 92573,
        31685, 41313, 18197, 9275, 67147, 35780, 30880, 61361, 38550, 2160,
        9233, 41534, 46983, 25588, 68837, 39465, 45640, 46036, 98661, 20194,
        8223, 10229, 45858, 43235, 95143, 91858, 51078, 93841, 89418, 30134,
        69164, 29271, 48045, 72455, 30784, 44290, 48608, 52901, 7445, 90378,
        96067, 978, 97906, 11766, 30219, 20241, 58512, 57470, 10498, 25397,
        93645, 40964, 21057, 32436, 35682, 86187, 43704, 73905, 76407, 35800,
        24650, 93701, 13970, 18312, 71228, 61638, 75588, 43567, 62716, 21011,
        345, 80047, 17578, 9642, 39241, 57157, 93209, 97333, 16720, 56979,
        88047, 34401, 17776, 63227, 15153, 12501, 67156, 44127, 30548, 10146,
        81325, 9016, 4427, 29847, 27298, 94056, 28884, 22293, 45880, 66540,
        77565, 191, 1373, 26955, 48962, 70091, 64059, 22794, 89457, 98355,
        17951, 45295, 30691, 46797, 84320, 47167, 34403, 74238, 10384, 7178,
        555, 32735, 63239, 8339, 26552, 37020, 98098, 80004, 48637, 93561,
        18777, 27812, 22684, 87194, 35206, 37797, 11059, 23081, 89086, 9773,
        61586, 54454, 56552, 99161, 96255, 75432, 53417, 19727, 2736, 83719,
        26079, 23991, 93596, 32717, 43238, 96634, 61073, 47526, 31662, 15560,
        37209, 53404, 61840, 11197, 51742, 33077, 11396, 22114, 65944, 96854,
        367, 20874, 34416, 68751, 38159, 47699, 20772, 68235, 2374, 64747,
        62037, 90941, 61405, 81954, 92689, 48105, 73398, 4808, 75103, 53406,
        61600, 66033, 38072, 46567, 98650, 67763, 83295, 73283, 55157, 27310,
        64256, 39190, 45811, 42748, 98623, 49803, 46184, 29669, 12676, 22454,
        30971, 50629, 41932, 3072, 65180, 13937, 57829, 77239, 32877, 56215,
        64455, 73492, 92587, 49872, 52309, 86389, 20580, 65735, 52945, 47191,
        57833, 7918, 96501, 67200, 6716, 10851, 89173, 30176, 4652, 96823, 816,
        64854, 1828, 68825, 84910, 17253, 46127, 92268, 99696, 46811, 65559,
        47179, 8721, 51485, 17037, 79422, 54149, 5485, 58304, 10237, 28847,
        63024, 70176, 19751, 28961, 60035, 83581, 23069, 86031, 8047, 2093,
        3258, 71554, 53651, 29613, 31948, 16113, 2186, 41393, 80912, 89060,
        55257, 25347, 36137, 30882, 30223, 59168, 21967, 17418, 84575, 84083,
        64103, 89000, 74544, 30773, 78884, 12368, 20589, 14983, 32378, 79777,
        80463, 18528, 25547, 37960, 96241, 74361, 48498, 41455, 62664, 48460,
        52373, 35725, 34486, 77781, 82429, 89402, 9258, 19891, 91608, 67826,
        34145, 58629, 72232, 33673, 70303, 31794, 66700, 97790, 94296, 67074,
        48761, 12949, 84860, 76653, 78523, 67467, 20059, 78588, 67786, 71715,
        24557, 47636, 21976, 10391, 49052, 82035, 47665, 51222, 48126, 41479,
        67692, 24754, 95648, 30379, 90808, 82138, 15132, 3660, 54337, 86701,
        5183, 59806, 134, 65722, 95495, 15555, 9205, 81784, 87169, 60820, 6567,
        94491, 66149, 43320, 13613, 82898, 76693, 60979, 3176, 13309, 48132,
        91208, 56738, 33097, 80193, 87492, 67715, 37469, 74675, 17635, 94955,
        84453, 85818, 28930, 14866, 3093, 39869, 46099, 276, 90564, 18756,
        11779, 92849, 45844, 60064, 67481, 82682, 64015, 88278, 55052, 62910,
        93678, 57290, 46181, 82724, 35369, 27046, 45902, 31645, 66073, 80501,
        98348, 3412, 18634, 67295, 34984, 82737, 20978, 61002, 92569, 59687,
        57401, 9374, 59660, 68879, 72642, 94718, 5068, 14799, 69255, 90465,
        77027, 8078, 85950, 36430, 13288, 33222, 11263, 80578, 21823, 77407,
        95004, 67810, 54527, 78954, 93361, 21208, 13885, 35565, 80897, 66898,
        64831, 88123, 82767, 5256, 73038, 21450, 97716, 34458, 2377, 99047,
        27823, 37352, 7798, 30355, 5753, 24731, 64677, 41783, 31614, 6168,
        52620, 64765, 52007, 96388, 92443, 29979, 86419, 24229, 95871, 71327,
        61273, 58978, 65138, 89982, 20775, 72729, 53140, 68578, 90089, 2540,
        97116, 54483, 96996, 64348, 12658, 75960, 33534, 55950, 87614, 573,
        56028, 10048, 61615, 23716, 23590, 70465, 15748, 13082, 62680, 80558,
        78573, 11737, 70414, 76855, 56726, 96860, 49587, 40849, 43443, 46478,
        5553, 14217, 19398, 48630, 90989, 71054, 88169, 6047, 14307, 84325,
        37287, 13768, 7016, 88389, 88184, 29335, 92396, 42917, 36559, 63286,
        2754, 98642, 6156, 894, 73664, 1459, 25805, 38152, 81252, 7627, 59339,
        47356, 84073, 25426, 55619, 99503, 5260, 9060, 57669, 49178, 29170,
        79561, 67050, 27374, 85792, 9189, 25007, 42820, 24272, 47016, 69408,
        36932, 27989, 39684, 63458, 17245, 20759, 6472, 16686, 59272, 79172,
        98727, 13675, 95628, 81057, 5024, 68567, 22956, 45610, 5044, 66408,
        52319, 92992, 19144, 72311, 78328, 10021, 88971, 43955, 66983, 30553,
        20291, 52882, 72728, 70366, 50693, 43797, 18336, 36170, 78991, 54128,
        78089, 60535, 36836, 33351, 99788, 34163, 44821, 60560, 36394, 94901,
        51809, 55459, 33525, 14131, 16046, 53206, 10415, 22968, 59514, 47873,
        17317, 92845, 66105, 55902, 69629, 89214, 66355, 69133, 81333, 98599,
        23555, 58573, 91300, 83996, 52357, 97808, 25064, 66188, 46614, 94201,
        10051, 26729, 39073, 6202, 29272, 22592, 2284, 48191, 14513, 96787,
        69537, 38191, 26463, 29202, 73929, 95797, 45051, 280, 31335, 71308,
        20346, 32069, 55012, 82071, 20376, 10509, 27205, 6668, 29398, 24130,
        92486, 95658, 56053, 95364, 52783, 55347, 12411, 46539, 76564, 16680,
        43348, 39007, 21199, 34454, 50836, 75733, 18892, 2390, 58100, 35127,
        72334, 48057, 54921, 71542, 94440, 51233, 43099, 23768, 19263, 40370,
        4101, 80854, 5726, 3984, 51715, 18896, 53756, 63657, 12608, 58236, 2538,
        96076, 17376, 78702, 12217, 4770, 63444, 96863, 304, 55877, 56536,
        79506, 3962, 49720, 6917, 10326, 26029, 80509, 25023, 65191, 87160,
        31380, 57936, 80637, 53526, 55361, 75753, 96269, 78015, 4564, 65, 19181,
        52032, 4198, 48694, 10491, 82423, 21527, 89571, 53942, 82664, 73877,
        18012, 17703, 11321, 14340, 12140, 11359, 99031, 25880, 8251, 32608,
        41315, 93642, 18356, 68374, 8543, 2348, 42440, 99294, 28010, 97690,
        36622, 58396, 6676, 11556, 58235, 97565, 15069, 34623, 84804, 56689,
        27532, 70202, 18600, 98171, 10158, 21736, 36022, 70802, 10599, 19192,
        25723, 46131, 30886, 80802, 67328, 88152, 82177, 44764, 12817, 57843,
        58258, 47704, 2523, 19316, 44008, 91853, 7029, 28667, 90297, 50611,
        92427, 87613, 32983, 38338, 9350, 76429, 57184, 21927, 2722, 4425,
        19265, 51500, 11681, 67369, 64022, 79551, 79111, 3741, 12907, 34200,
        99835, 18261, 53281, 26549, 58885, 27509, 66975, 86570, 21053, 37691,
        11209, 59417, 25618, 31530, 97021, 54957, 34520, 9127, 9128, 9465,
        98630, 69759, 46155, 196, 6595, 59935, 42502, 38304, 61265, 12374,
        73512, 3891, 15612, 54834, 32326, 89231, 79589, 62488, 48770, 9530,
        7758, 41107, 82645, 17109, 49746, 34689, 23196, 77708, 55899, 46104,
        26997, 33205, 13069, 49210, 37373, 41883, 30904, 96904, 64717, 87913,
        72161, 57245, 15465, 56097, 85181, 37556, 49999, 86597, 26382, 65350,
        3456, 8127, 87059, 520, 23483, 89380, 78135, 88853, 49173, 47491, 32782,
        7771, 37967, 70516, 75124, 86894, 23869, 14961, 52380, 59939, 23205,
        39669, 20738, 57835, 6603, 45048, 85971, 12366, 22707, 78041, 36264,
        2841, 97585, 32158, 58936, 44659, 86197, 3009, 49531, 1434, 72852,
        25458, 70669, 33194, 87013, 44827, 534, 49694, 78123, 87220, 38643,
        71902, 54824, 36909, 72457, 29961, 28750, 9907, 2504, 55531, 58772,
        10033, 61661, 12175, 34481, 34105, 78385, 61910, 83929, 83422, 34142,
        63842, 30680, 75568, 50504, 65745, 19525, 58881, 92298, 98276, 17106,
        47119, 62576, 98463, 69977, 53023, 60553, 90722, 35496, 30866, 59240,
        86485, 63005, 96976, 44442, 10577, 27799, 22286, 42099, 49080, 94510,
        30592, 31095, 59190, 46056, 67495, 7721, 42705, 61145, 47948, 26836,
        70662, 54457, 70076, 51564, 70214, 86283, 82192, 81952, 4279, 17339,
        78464, 46510, 39249, 57353, 51031, 41513, 8184, 62742, 82976, 6686,
        65217, 61767, 55172, 64558, 99385, 8557, 29235, 16403, 57355, 94644,
        64303, 11656, 96452, 25270, 91575, 92365, 91706, 15185, 54800, 52321,
        64617, 3454, 51773, 21879, 25169, 86997, 98393, 10179, 19364, 96390,
        2522, 38080, 27247, 10660, 29790, 92755, 82373, 95712, 64431, 68503,
        22329, 24167, 80129, 21768, 72264, 83136, 90200, 90701, 10860, 64054,
        50627, 29397, 54291, 62562, 90853, 93293, 26411, 49579, 26451, 66648,
        69176, 8357, 98960, 65036, 84900, 24394, 12486, 32100, 99281, 37144,
        42403, 99899, 67210, 143, 6701, 46463, 43306, 9829, 21486, 68832, 79080,
        48857, 19872, 53145, 28280, 73066, 859, 29193, 93285, 69567, 79420,
        8677, 55204, 23679, 98890, 78455, 52724, 28167, 39319, 2287, 68647,
        67975, 69259, 76359, 50767, 28623, 3836, 17383, 60753, 42816, 28818,
        52660, 64812, 74240, 38679, 79628, 92937, 68963, 36129, 26582, 74425,
        56694, 24333, 26258, 6461, 77960, 30919, 80104, 48905, 16603, 53366,
        16112, 37881, 88754, 92418, 94658, 28662, 54607, 27206, 86144, 98689,
        62586, 30711, 12192, 42718, 35731, 77485, 38094, 44839, 34789, 36589,
        77263, 9302, 49918, 20321, 38300, 36071, 18315, 29903, 14265, 8845,
        52828, 79025, 8699, 37910, 39996, 3941, 68758, 2151, 15527, 22041,
        32404, 86118, 64259, 60749, 59957, 51749, 62306, 47628, 82195, 56545,
        97787, 3681, 20217, 935, 7968, 87592, 65777, 29169, 90833, 80110, 42121,
        565, 64443, 54100, 96954, 38786, 29763, 96301, 52979, 6027, 76316,
        39555, 55320, 17928, 6670, 60236, 92057, 24091, 68042, 98759, 82232,
        38290, 1044, 47750, 11878, 69809, 21127, 96047, 5556, 6120, 72945,
        77987, 37576, 41588, 43123, 23656, 25949, 64209, 39352, 11687, 31711,
        43013, 8982, 27221, 7170, 36942, 56998, 87526, 17319, 96915, 95482,
        55372, 48518, 64320, 71644, 34525, 61431, 42971, 57989, 51645, 43291,
        45940, 92075, 68869, 64581, 82193, 75108, 37932, 7201, 8013, 7346, 4767,
        91757, 61358, 29477, 25335, 85052, 36789, 26693, 27339, 53529, 16277,
        42539, 27591, 78962, 24652, 33721, 67539, 56754, 92208, 23771, 29681,
        22431, 97981, 63928, 29289, 74870, 20594, 80780, 48570, 77806, 76510,
        33601, 88250, 5506, 35756, 85917, 26810, 7026, 82325, 21109, 85813,
        69516, 99180, 45776, 61151, 22392, 40731, 14544, 25067, 22185, 70994,
        19048, 64154, 78896, 96614, 89815, 17408, 72349, 54119, 73919, 1356,
        89114, 28833, 80358, 48941, 61219, 79798, 85248, 6013, 54806, 63084,
        11679, 35650, 86743, 25605, 9459, 31880, 31850, 93125, 7317, 42526,
        45879, 34509, 6546, 78759, 85298, 45386, 83802, 81593, 43875, 49638,
        84006, 46115, 80144, 9986, 30247, 26696, 48272, 56, 36946, 26098, 17202,
        58971, 25548, 57313, 96899, 22147, 10967, 49677, 21410, 75467, 73307,
        73299, 5896, 36741, 73657, 70122, 54909, 56895, 8596, 13249, 73349,
        48675, 4846, 26232, 56033, 98539, 88960, 67158, 41589, 55958, 81780,
        1675, 48891, 64611, 21804, 49261, 87014, 30019, 65836, 68316, 7993,
        31489, 40724, 87143, 31409, 88337, 93503, 98794, 70543, 54236, 54587,
        24759, 3976, 57796, 94408, 47752, 31006, 6340, 1754, 72295, 7122, 43988,
        28224, 46921, 81051, 76339, 94160, 61717, 585, 47559, 90658, 68075,
        7365, 61972, 30022, 64378, 16685, 50322, 37481, 11229, 30252, 31029,
        7398, 36799, 85269, 45818, 18870, 60137, 77792, 66764, 85449, 21262,
        77963, 20831, 90025, 93811, 6339, 15948, 13620, 96633, 92972, 12151,
        95384, 95193, 5732, 76303, 49344, 90667, 60271, 72921, 13710, 92578,
        29926, 41881, 71887, 99513, 39697, 69511, 17968, 69321, 47306, 62448,
        77257, 32871, 41087, 63462, 55154, 6223, 78149, 62787, 68882, 22006,
        8320, 23919, 59409, 42179, 48956, 75159, 52093, 2726, 89120, 66777,
        83901, 86149, 66559, 37050, 45280, 97194, 48204, 91877, 73773, 74476,
        38521, 6822, 58091, 36687, 99800, 7411, 51260, 34996, 47857, 15460,
        10778, 32743, 66488, 79493, 36014, 67300, 65378, 82152, 93164, 74211,
        69453, 37479, 94707, 91588, 76276, 4600, 64843, 56478, 65160, 95500,
        97927, 7730, 57478, 2208, 36340, 40455, 20093, 61832, 83590, 50926,
        66256, 95592, 88913, 21523, 87519, 28703, 55905, 38928, 87742, 99387,
        12394, 33770, 30380, 84122, 82376, 70461, 4844, 97706, 19907, 49783,
        91999, 76031, 81813, 25202, 35050, 89803, 35036, 6024, 13286, 90282,
        13524, 992, 14230, 41579, 88498, 34522, 36387, 49023, 85939, 90093,
        97755, 11976, 25354, 68566, 59757, 15601, 88353, 71481, 24890, 99231,
        60336, 19258, 20382, 8392, 78367, 72744, 25676, 43732, 62601, 18008,
        80860, 22703, 84036, 40093, 10866, 37742, 44994, 65488, 58528, 13779,
        37586, 42802, 70645, 23659, 22663, 24451, 99027, 10708, 16114, 61279,
        59499, 76836, 20915, 47690, 7594, 86851, 76113, 47616, 6101, 79927,
        33561, 22117, 96540, 43578, 16826, 47052, 74378, 30433, 60788, 15331,
        3075, 16830, 32277, 4464, 71696, 47194, 71071, 95918, 3724, 49693,
        53698, 89526, 63981, 97905, 74567, 83226, 982, 14304, 39070, 59045,
        8278, 39925, 23654, 69108, 20769, 93329, 42691, 33435, 89193, 77799,
        90275, 10017, 88628, 39180, 79221, 38555, 27535, 51353, 2502, 13118,
        1156, 24612, 78870, 77711, 90142, 4822, 73056, 80169, 84498, 23416,
        89077, 87589, 66875, 54550, 19896, 33084, 38268, 43693, 63, 4848, 34742,
        26928, 87557, 22855, 19267, 37887, 47244, 88942, 65796, 42614, 15896,
        43740, 46672, 43803, 39789, 31623, 11985, 45931, 98164, 63599, 13547,
        51434, 56114, 73742, 93182, 40484, 64943, 70186, 73784, 93453, 88561,
        24547, 8255, 18096, 59676, 38860, 41972, 7823, 89945, 78823, 29201,
        53218, 50350, 32951, 50511, 12204, 81700, 76413, 37851, 78362, 71404,
        57664, 29425, 67681, 4403, 77186, 96079, 97181, 78971, 15449, 97337,
        74916, 38374, 18975, 25924, 25816, 57451, 73365, 86733, 22401, 34651,
        54685, 31797, 67027, 64597, 77714, 36140, 97707, 88057, 98358, 61004,
        18794, 45442, 26126, 71768, 71167, 50655, 53116, 90157, 57222, 66362,
        60142, 40503, 53516, 67549, 54153, 73314, 60311, 17521, 96458, 11568,
        18533, 28729, 52860, 73714, 42830, 48960, 5257, 58177, 6427, 52786,
        8637, 6360, 58882, 2191, 34488, 56777, 72003, 85333, 31432, 97305,
        97118, 8880, 81510, 39778, 13593, 18843, 59955, 40285, 41344, 17809,
        67508, 75442, 99127, 20631, 647, 69616, 41448, 95342, 42347, 36073,
        93345, 99797, 20924, 1256, 81647, 60292, 91345, 51841, 82809, 66825,
        64896, 17338, 97449, 73775, 42042, 57146, 8650, 19287, 95164, 84985,
        35434, 36571, 88273, 56352, 15857, 40826, 76004, 25584, 28538, 75827,
        43532, 41378, 37029, 45358, 97504, 93478, 70458, 8968, 54127, 45718,
        547, 96100, 66209, 51554, 98294, 35049, 81613, 39303, 93547, 15738,
        12649, 34436, 68730, 76315, 90517, 89732, 84989, 41991, 66794, 54995,
        45641, 88999, 62202, 62935, 15907, 25935, 28717, 59433, 27184, 498,
        14385, 18740, 14565, 76282, 68808, 81738, 21743, 32616, 60056, 85801,
        77428, 2029, 64472, 31661, 47013, 68704, 92157, 1606, 39923, 9334,
        93643, 21606, 5284, 64197, 30320, 83293, 25839, 86721, 34262, 91166,
        4214, 37892, 63890, 5057, 71579, 79813, 14932, 78912, 59541, 47338,
        9617, 30749, 2799, 44901, 45812, 94741, 57081, 90181, 74901, 91671,
        42773, 56201, 51666, 95034, 825, 53578, 16110, 84952, 9814, 34518,
        58747, 33054, 53880, 27779, 37168, 1319, 7124, 59832, 28823, 21634,
        46722, 15346, 14213, 71830, 53246, 955, 65815, 56462, 14425, 46454,
        90959, 79490, 24838, 35856, 52569, 84929, 8338, 18141, 58307, 96999,
        22711, 19569, 1998, 60687, 51592, 21626, 55256, 61087, 33139, 63743,
        85731, 42210, 89717, 50237, 73918, 13133, 67700, 72992, 10972, 91988,
        44833, 6033, 88646, 38208, 29685, 77191, 54756, 49233, 4637, 84032,
        30065, 90834, 77740, 94814, 16263, 78877, 1897, 29510, 3658, 80079,
        98656, 45089, 61158, 75830, 25376, 56046, 19203, 12869, 51608, 60189,
        87148, 55684, 28293, 71140, 46779, 71908, 57260, 72656, 2005, 86852,
        18872, 74086, 9784, 84048, 97431, 75145, 52627, 96961, 61123, 33878,
        47012, 28288, 11362, 44980, 61632, 65954, 86533, 21513, 67271, 96704,
        65309, 4391, 98974, 36473, 84834, 52864, 38466, 38949, 58660, 88051,
        80154, 14441, 66095, 98934, 68696, 62078, 38691, 325, 15591, 3087,
        71713, 53482, 29436, 49825, 51534, 5998, 12956, 27628, 72261, 33063,
        26266, 80208, 52523, 53423, 91436, 69053, 61356, 70450, 54166, 88595,
        78017, 23713, 67911, 91491, 82428, 60006, 10633, 96338, 20954, 36375,
        25463, 59391, 48715, 81592, 33662, 99642, 91873, 71195, 54584, 56207,
        38956, 87932, 40298, 14664, 63636, 30616, 37057, 61142, 32721, 31937,
        49390, 40677, 51591, 29564, 38078, 81357, 87241, 48847, 17372, 82787,
        46556, 78692, 6585, 98769, 88642, 61250, 25980, 96543, 79513, 75603,
        35532, 63853, 38468, 22169, 87903, 91885, 45135, 54205, 77005, 55743,
        46552, 12720, 10717, 89115, 10920, 33398, 59796, 89324, 97261, 40610,
        33419, 33377, 43653, 52986, 81799, 56701, 61457, 52577, 82732, 13356,
        48, 7007, 57677, 19381, 88571, 71283, 62857, 91445, 32241, 5200, 42886,
        78327, 28392, 47247, 38948, 2602, 619, 20960, 79402, 72088, 62203,
        93245, 17575, 6112, 17653, 18430, 24595, 15477, 99994, 98389, 95621,
        60802, 3692, 8142, 63731, 85822, 63962, 1292, 96225, 56476, 50893,
        10066, 53093, 86924, 42868, 99159, 97304, 80664, 36598, 45142, 1360,
        99804, 54632, 30115, 11499, 52951, 38240, 38483, 82808, 93950, 69826,
        2615, 78469, 10207, 78540, 26008, 35204, 72799, 90669, 87389, 90969,
        23835, 31395, 88021, 18041, 79233, 70986, 61338, 53551, 22021, 90117,
        61368, 39732, 27951, 26402, 93249, 80106, 24531, 28907, 76756, 17834,
        69170, 87227, 15254, 74174, 45248, 444, 48622, 6711, 401, 60787, 32490,
        61835, 45265, 19993, 24733, 35133, 77949, 45560, 10014, 57111, 61587,
        77801, 44966, 33195, 76589, 9270, 22878, 26427, 18928, 96510, 5274,
        34461, 18326, 55285, 67683, 28194, 46798, 48285, 89416, 84346, 12818,
        42894, 28235, 28700, 85457, 95498, 22839, 23001, 70248, 14740, 61024,
        78620, 81324, 79511, 59709, 20049, 2694, 49144, 10280, 89179, 70829,
        96534, 70983, 8266, 27731, 13762, 34664, 31136, 62600, 96978, 57501,
        64770, 69925, 70349, 68630, 5959, 31099, 6422, 6290, 58189, 92420,
        25973, 78158, 15362, 96451, 20921, 32875, 34339, 1809, 13738, 57479,
        74572, 28568, 44271, 21854, 61581, 61189, 53074, 7011, 68192, 50342,
        31245, 12241, 15579, 69757, 90455, 19, 87947, 14041, 41716, 75552,
        74820, 37733, 64361, 46970, 76178, 75953, 81264, 56523, 58822, 683,
        19087, 26670, 88328, 4898, 3473, 90533, 26913, 60151, 57302, 8421,
        93636, 20749, 43266, 63779, 91673, 40039, 43571, 25452, 63746, 36389,
        77337, 95883, 26990, 40557, 90211, 53358, 38269, 78898, 11748, 65058,
        90913, 21872, 79270, 25654, 94477, 81521, 74739, 3551, 12847, 108,
        81499, 92804, 42113, 47327, 33983, 53018, 18917, 39575, 26873, 92011,
        662, 34395, 90388, 15732, 58529, 85382, 50647, 89890, 66747, 80485, 142,
        84821, 67363, 59096, 48309, 20532, 3636, 77741, 83343, 28350, 95541,
        70332, 98596, 45540, 53481, 93677, 80394, 34532, 2814, 72122, 49756,
        6759, 11046, 16510, 30231, 60259, 92874, 37552, 41552, 26108, 8306,
        99578, 93819, 77322, 52855, 58546, 18375, 86760, 29421, 57496, 17651,
        40280, 17378, 28058, 59299, 21062, 92579, 93963, 71098, 5471, 38630,
        74440, 32488, 26262, 83430, 83312, 72339, 39835, 65537, 62038, 73040,
        71011, 57476, 72303, 90289, 16539, 68497, 83336, 89593, 1536, 21714,
        72346, 74047, 19596, 85972, 86112, 29987, 4373, 76732, 63611, 74749,
        87422, 79331, 16346, 97771, 67079, 65878, 22121, 91193, 14418, 130,
        42130, 24823, 25266, 48080, 49082, 80707, 42784, 1028, 65294, 41760,
        62304, 65579, 82850, 53351, 10040, 53357, 4617, 49120, 25502, 57329,
        76128, 87712, 42867, 38023, 93922, 47916, 67392, 81765, 35270, 69213,
        59107, 84300, 26314, 2592, 89095, 36807, 61149, 46141, 39700, 90725,
        15943, 66693, 67397, 62003, 88583, 61764, 8936, 73456, 46641, 56541,
        32395, 97217, 43565, 88108, 91178, 30236, 3703, 61977, 1120, 19721,
        42642, 14106, 49042, 9046, 60991, 32292, 36444, 44171, 97948, 55315,
        44913, 66438, 84354, 35224, 21921, 51186, 35371, 51776, 1701, 33915,
        19570, 50948, 89877, 17382, 63878, 83406, 81076, 62668, 50982, 17910,
        14337, 74426, 45057, 16921, 82286, 2015, 88055, 59264, 38030, 26212,
        87284, 3736, 18959, 25409, 7639, 91554, 69831, 97816, 66453, 79651,
        32346, 79803, 95075, 68760, 99528, 59560, 16203, 97983, 73633, 11713,
        4568, 67616, 37551, 36504, 65150, 16118, 55065, 34958, 74897, 32482,
        17688, 8309, 57267, 17605, 21018, 3791, 61075, 6805, 57600, 8567, 11606,
        34135, 84609, 79088, 4478, 38157, 67489, 43755, 12000, 75417, 49553,
        90664, 10906, 31902, 30111, 10215, 31483, 7857, 79568, 34132, 22992,
        81931, 31312, 38519, 24530, 55247, 78869, 4500, 3824, 74964, 75230,
        86729, 82049, 72533, 49744, 2170, 59105, 90466, 80618, 67451, 75307,
        84063, 9488, 28056, 73189, 30265, 58733, 73208, 58975, 64212, 95382,
        10512, 50287, 37128, 2767, 39814, 7421, 50911, 10233, 51523, 91024,
        30812, 94982, 74936, 92629, 87751, 88, 5653, 96174, 32521, 41387, 88991,
        68911, 26514, 72381, 86937, 63020, 33791, 62837, 93847, 78650, 4867,
        68146, 16181, 89539, 76090, 98383, 38486, 50958, 84289, 15640, 5346,
        79415, 725, 63422, 34321, 35912, 3229, 17625, 66539, 43242, 38569,
        55208, 92654, 78198, 23297, 97121, 77331, 90976, 30776, 730, 2914,
        89249, 33899, 9930, 49329, 55751, 47780, 33986, 72616, 91038, 72258,
        71811, 9191, 31683, 15923, 55360, 66502, 96612, 57266, 14940, 94632,
        2567, 13538, 88711, 1803, 29472, 79489, 2108, 47242, 97288, 8601, 2825,
        52792, 67041, 31796, 26775, 61224, 97321, 48617, 71985, 83101, 60491,
        2144, 16926, 43229, 25210, 2785, 6817, 24986, 90578, 30802, 30261,
        80008, 12798, 65398, 95248, 87210, 40689, 67655, 7533, 81842, 85558,
        72424, 56248, 82621, 5586, 45221, 67724, 74603, 67208, 41551, 85736,
        44804, 57455, 21441, 47577, 64178, 16708, 24532, 14810, 49174, 58925,
        61938, 61703, 94893, 58873, 69240, 35103, 51844, 42346, 17693, 31522,
        36498, 94234, 10003, 67569, 29678, 73282, 62175, 69770, 45090, 44580,
        96118, 3001, 8957, 95565, 41805, 48270, 20348, 52915, 97709, 54559,
        88988, 46252, 88466, 14953, 10099, 45023, 81227, 70720, 42988, 19758,
        7838, 33201, 89772, 11012, 83831, 20436, 52532, 68861, 3109, 22239,
        17547, 24955, 35952, 1367, 55789, 47696, 48851, 82330, 79685, 40970,
        93412, 26356, 21848, 48918, 14155, 70824, 72555, 85966, 39742, 48112,
        73044, 69227, 54178, 99164, 24777, 25193, 28503, 44403, 80775, 3635,
        66939, 54034, 80825, 71993, 82960, 63059, 45842, 11322, 55388, 75134,
        55097, 95497, 48667, 39811, 46363, 35156, 19423, 54243, 38117, 7137,
        90435, 52259, 20578, 81215, 759, 69075, 50089, 53527, 61455, 88944,
        39621, 8097, 91923, 13756, 22247, 5588, 50490, 90676, 65092, 66118,
        58538, 46927, 20380, 51151, 41325, 68458, 66273, 9402, 38204, 1773,
        95719, 53386, 84371, 36667, 98806, 33842, 38118, 41174, 24582, 79478,
        35233, 36, 12280, 2872, 57007, 5676, 27740, 27118, 1609, 42530, 28025,
        7833, 92577, 14461, 2806, 12692, 47686, 63036, 9353, 95171, 37115,
        46615, 67366, 55830, 57249, 14830, 3868, 96928, 33176, 15573, 92729,
        78815, 5401, 29571, 55214, 76473, 7832, 13332, 49646, 72517, 99850,
        46628, 87190, 93423, 74338, 21494, 5121, 68165, 29578, 92652, 61794,
        56231, 73013, 49767, 25201, 51588, 43992, 93220, 56821, 59222, 96764,
        31204, 97624, 33903, 87410, 54004, 46856, 69447, 69491, 9921, 69918,
        48082, 70434, 42586, 58928, 24727, 29283, 57457, 16935, 62665, 45636,
        15149, 49742, 56143, 3112, 10568, 10756, 77163, 10503, 53401, 91467,
        69183, 54668, 73697, 70467, 26867, 8922, 48496, 27208, 48838, 11867,
        91182, 24931, 18792, 91424, 61734, 39533, 47617, 58262, 15055, 44521,
        45859, 29110, 81032, 44301, 73939, 51992, 21420, 15262, 16144, 3337,
        31307, 67878, 12682, 83384, 68871, 68885, 65701, 54658, 94208, 9043,
        69313, 26762, 50219, 53859, 59376, 55845, 66565, 6783, 53405, 96287,
        78290, 47005, 95906, 77063, 75147, 95242, 27946, 25848, 82321, 79353,
        56227, 51620, 43231, 39191, 17251, 74383, 28512, 1426, 38383, 78863,
        48455, 78736, 52190, 67556, 38096, 73408, 26422, 64916, 12373, 45703,
        19202, 38883, 56801, 84400, 3686, 29083, 96460, 38480, 21731, 61355,
        79374, 66929, 72507, 68625, 18803, 10523, 26296, 19209, 68984, 36461,
        84340, 35845, 20899, 30312, 14286, 67742, 7861, 6141, 46938, 86356,
        99033, 63355, 88469, 11108, 10932, 69180, 62062, 98186, 71175, 22975,
        41074, 33331, 15584, 46908, 61640, 43177, 35298, 40592, 39600, 9287,
        18524, 88748, 90771, 93116, 5062, 96351, 49618, 73480, 60822, 65212,
        27093, 18441, 9476, 1621, 35082, 69154, 89144, 77798, 16601, 45360,
        39972, 81060, 44828, 63768, 38007, 83591, 13704, 77433, 87065, 48435,
        97097, 50300, 27966, 41358, 15135, 96815, 89911, 69861, 27825, 15687,
        72114, 10672, 56001, 43032, 892, 12744, 88280, 84956, 20359, 69981,
        70358, 46228, 20941, 5601, 40664, 68488, 34333, 20511, 37248, 60396,
        69927, 79131, 31084, 59451, 53280, 82566, 22066, 16813, 64589, 75729,
        51385, 55116, 87971, 99771, 21140, 23793, 46712, 16684, 63899, 69763,
        60345, 41934, 61781, 6239, 31939, 55910, 61154, 30964, 23884, 40327,
        35294, 91350, 92929, 42105, 57124, 44550, 62483, 97187, 1337, 23848,
        73261, 81492, 55854, 67298, 51461, 42575, 87517, 30333, 6514, 26215,
        87844, 89679, 75099, 21826, 67251, 78862, 64468, 60265, 5143, 75105,
        59550, 67056, 27522, 63446, 1735, 3536, 4983, 61778, 76262, 37017,
        57641, 82157, 36580, 35284, 7640, 54777, 81270, 43616, 92678, 87068,
        11212, 25599, 41993, 39088, 33946, 54478, 2724, 2740, 4268, 67597,
        29773, 33068, 1420, 85311, 20229, 8646, 30185, 23682, 97127, 30962,
        22680, 2410, 73743, 23721, 66661, 79380, 97162, 5663, 35747, 37886,
        29897, 7978, 41896, 72087, 14046, 8741, 62880, 5789, 22283, 69247,
        19567, 96905, 19419, 87851, 76367, 53792, 43804, 18052, 94381, 12977,
        15148, 82156, 52985, 95722, 66441, 49188, 4315, 29936, 49983, 76023,
        31975, 22374, 51816, 45145, 91778, 949, 97477, 89568, 32178, 56432,
        43350, 13638, 67068, 98400, 68414, 74630, 21601, 36027, 6718, 34227,
        46900, 48865, 40396, 54941, 91441, 61707, 15292, 60039, 65550, 77958,
        52216, 46830, 37172, 95328, 17293, 32941, 5198, 71431, 2293, 77345,
        76555, 82559, 96766, 20588, 43920, 60279, 58429, 81436, 22323, 93254,
        94373, 53081, 31311, 57332, 99972, 35610, 93112, 48638, 23441, 45618,
        56962, 86497, 40874, 60702, 91870, 12540, 15220, 95405, 7919, 27936,
        54895, 43917, 52757, 5362, 95469, 56936, 96012, 34846, 33086, 27675,
        10165, 26933, 157, 8157, 10481, 80226,
      ]),
    ).toEqual(3);
  });
});
